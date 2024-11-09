export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to InvenSmart</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            line-height: 1.6;
            color: #666;
        }
        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
            text-align: center;
        }
        .footer a {
            color: #007BFF;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to InvenSmart, [User's Name]!</h1>
        <p>We're excited to have you join our community at <strong>InvenSmart</strong>. Now you can enjoy a seamless shopping experience with a wide range of products tailored just for you.</p>
        <p>We hope you have a great time shopping with us. If you need any assistance, feel free to reach out to our support team. We're here to help you every step of the way!</p>
        <p>Happy Shopping!</p>
        <p>Best Regards,<br>The InvenSmart Team</p>
        <p class="footer">
            If you did not create this account, please ignore this email or <a href="[Support URL]">contact us</a> for assistance.
            <br><br>
            &copy; 2024 InvenSmart. All rights reserved.
        </p>
    </div>
</body>
</html>

`;

export const TRANSACTION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transaction Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header h2 {
            margin: 0;
            color: #333333;
        }
        .details {
            margin: 20px 0;
        }
        .details h4 {
            color: #666666;
            margin-bottom: 10px;
        }
        .item {
            padding: 10px;
            border-bottom: 1px solid #eeeeee;
            display: flex;
            justify-content: space-between;
        }
        .footer {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #eeeeee;
            text-align: center;
            color: #999999;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h2>Transaction Bill</h2>
            <p>Date: [Transaction Date]</p>
        </div>

        <div class="details">
            <h4>Purchased Items:</h4>
            <div class="item-list">
                [Items]
            </div>
            <div class="item" style="font-weight: bold;">
                <span>Subtotal</span>
                <span>[Subtotal]</span>
            </div>
            <div class="item" style="font-weight: bold;">
                <span>Amount Payed : </span>
                <span>[Total Amount]</span>
            </div>
        </div>

        <div class="footer">
            <p>Thank you for shopping with us!</p>
            <p>&copy; INVENSMART</p>
        </div>
    </div>
</body>
</html>
`;


// export const PASSWORD_RESET_REQUEST_TEMPLATE = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Reset Your Password</title>
// </head>
// <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
//   <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
//     <h1 style="color: white; margin: 0;">Password Reset</h1>
//   </div>
//   <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
//     <p>Hello,</p>
//     <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
//     <p>To reset your password, click the button below:</p>
//     <div style="text-align: center; margin: 30px 0;">
//       <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Password</a>
//     </div>
//     <p>This link will expire in 1 hour for security reasons.</p>
//     <p>Best regards,<br>Your App Team</p>
//   </div>
//   <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
//     <p>This is an automated message, please do not reply to this email.</p>
//   </div>
// </body>
// </html>
// `;