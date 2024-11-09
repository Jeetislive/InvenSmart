import nodemailer from "nodemailer";
import PDFDocument from 'pdfkit';
import fs from "fs";
import path from "path";
import dotenv from "dotenv"
import { TRANSACTION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplate.js";
import AppError from "../error/AppError.js";

dotenv.config();
export const sendWelcomeEmail = async (email, name) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Welcome to InvenSmart!",
        html: WELCOME_EMAIL_TEMPLATE.replace("[User's Name]", name)
    } 

    transporter.sendMail(mailOptions, (error,info) => {
        if(error) {
            console.error("Error sending Welcome email", error);
            throw new AppError(`Error sending Welcome email ${error}`)
        } else {
            console.log("Email sent successfully", info.response);
        }
    })
}

// export const sendTransactionMail = async(customerId,customerEmail, transactionDate, totalAmount, items, subTotal ) => {
//     // console.log(items);
//     const transactionDetails = {
//         customerId,
//         transactionDate,
//         totalAmount,
//         items,
//         subTotal
//     }
//     const pdfPath = generateTransactionPdf(transactionDetails);
    
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     });
//     const mailOptions = {
//         from: `"InvenSmart"${process.env.EMAIL}`,
//         to: customerEmail,
//         subject: "Transaction Details",
//         text: "Please find attached your transaction bills",
//         html: TRANSACTION_EMAIL_TEMPLATE.replace("[Transaction Date]", transactionDate)
//                                        .replace("[Total Amount]", totalAmount)
//                                        .replace("[Items]", items.map(item => `${item.productName}:${item.quantity} x ${item.unitPrice}`).join("<br/>"))
//                                        .replace("[Subtotal]", subTotal),
//         attachments: [
//             {
//                 filename: `${transactionDetails.customerId}_transaction.pdf`,
//                 path: pdfPath
//             }
//         ]

//     }
//     transporter.sendMail(mailOptions, (error, info) => {
//         if(error) {
//             console.error("Error sending Transaction email", error);
//             throw new AppError(`Error sending Transaction email ${error}`)
//         } else {
//             console.log("Email sent successfully");
//         }
//     })
// }


// function  generateTransactionPdf(transactionDetails) {
//     const doc = new PDFDocument();
//     const billsDir = path.resolve('bills');
//     const pdfPath = path.join(billsDir, `${transactionDetails.customerId}_transaction.pdf`);
//     // Create PDF file
//     doc.pipe(fs.createWriteStream(pdfPath));

//     // Add details to PDF
//     doc.fontSize(18).text("Transaction Bill", { align: 'center' });
//     doc.moveDown();
//     doc.fontSize(12).text(`Customer ID: ${transactionDetails.customerId}`);
//     transactionDetails.items.forEach(item => {
//         doc.moveDown();
//         doc.fontSize(10).text(`Product ID: ${item.productId}`);
//         doc.fontSize(10).text(`Product Name: ${item.productName}`);
//         doc.text(`Quantity: ${item.quantity}`);
//         doc.text(`Unit Price: $${item.unitPrice}`);
//         doc.text(`Subtotal: $${subTotal}`);
//         doc.moveDown();
//         doc.lineGap(2);
//         doc.dash(2, { space: 5 });
//         doc.lineJoin('bevel');
//         doc.strokeColor('black');
//         doc.lineWidth(1);
//         doc.line(0, doc.y, doc.page.width, doc.y);
//         doc.moveDown();
//         doc.dash(null);
//         doc.lineJoin('round');
//         doc.strokeColor('black');
//         doc.lineWidth(0.5);
//         doc.line(0, doc.y, doc.page.width, doc.y);
//         // doc.text(`Product Name: ${transactionDetails.productName}`);
//         // doc.text(`Product ID: ${transactionDetails.productId}`);
//         // doc.text(`Quantity: ${transactionDetails.quantity}`);
        
//     });

//     doc.text(`Amount Payed: $${transactionDetails.totalAmount}`);

//     // Finalize PDF file
//     doc.end();

//     return pdfPath;
// }
export const sendTransactionMail = async (customerId, customerEmail, transactionDate, totalAmount, items, subTotal,transactionId) => {
    const transactionDetails = {
        customerId,
        transactionDate,
        totalAmount,
        items,
        subTotal,
        transactionId
    };

    try {
        const pdfPath = await generateTransactionPdf(transactionDetails); // Wait for PDF creation

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: `"InvenSmart" <${process.env.EMAIL}>`,
            to: customerEmail,
            subject: "Transaction Details",
            text: "Please find attached your transaction bill",
            html: TRANSACTION_EMAIL_TEMPLATE.replace("[Transaction Date]", transactionDate)
                                           .replace("[Total Amount]", totalAmount)
                                           .replace("[Items]", items.map(item => `${item.productName}: ${item.quantity} x ${item.unitPrice}`).join("<br/>"))
                                           .replace("[Subtotal]", subTotal),
            attachments: [
                {
                    filename: `${transactionDetails.transactionId}_transaction.pdf`,
                    path: pdfPath
                }
            ]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending Transaction email", error);
                throw new AppError(`Error sending Transaction email ${error}`);
            } else {
                console.log("Email sent successfully");
            }
        });
    } catch (error) {
        console.error("Failed to generate or send transaction PDF email:", error);
        throw new AppError("Failed to generate or send transaction PDF email.");
    }
};

function generateTransactionPdf(transactionDetails) {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const billsDir = path.resolve('bills');
        const pdfPath = path.join(billsDir, `${transactionDetails.transactionId}_transaction.pdf`);

        // Ensure the bills directory exists
        if (!fs.existsSync(billsDir)) {
            fs.mkdirSync(billsDir);
        }

        const writeStream = fs.createWriteStream(pdfPath);
        doc.pipe(writeStream);

        // Add details to PDF
        doc.fontSize(18).text("Transaction Bill", { align: 'center' });
        doc.fontSize(12).text(`Transaction Date:${transactionDetails.transactionDate}`, { align: 'center' });
        doc.moveDown();
        doc.fontSize(12).text(`Customer ID: ${transactionDetails.customerId}`, { align: 'center' });
        transactionDetails.items.forEach(item => {
            doc.moveDown();
            doc.fontSize(10).text(`Product ID: ${item.productId}`, { align: 'center' });
            doc.text(`Product Name: ${item.productName}`, { align: 'center' });
            doc.text(`Quantity: ${item.quantity}`, { align: 'center' });
            doc.text(`Unit Price: $${item.unitPrice}`, { align: 'center' });
            doc.text(`Subtotal: $${item.quantity * item.unitPrice}`, { align: 'center' });
            doc.moveDown();
        });
        doc.moveDown();
        doc.text(`Payable: ${transactionDetails.subTotal}`, { align: 'center' });
        doc.text(`Amount Paid: $${transactionDetails.totalAmount}`, { align: 'center' });
        doc.moveDown();
        doc.text(`Thank you for shopping with us!`, { align: 'center' });
        doc.end();

        // Resolve the promise once the PDF has been fully written
        writeStream.on('finish', () => resolve(pdfPath));
        writeStream.on('error', reject);
    });
}
