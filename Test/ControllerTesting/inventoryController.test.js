import {expect} from "chai"
import sinon from "sinon"
import { adjustInventory } from "../../controllers/inventoryController.js";
import InventoryService from "../../services/InventoryService.js";

describe('Inventory Controller', () => {
    let req, res, next;

    beforeEach(() => {
        req = {};
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
        next = sinon.stub();
    });
    afterEach(() => {
        sinon.restore();
    });
    describe('adjust Inventory', () => {
        it('should adjust an Inventory adjustment and return status 201',
            async () => {
                req.body = {
                    "productId": "4",
                    "adjustmentDate": "2024-10-20 12:00:42",
                    "adjustmentType": "Decrease", // 'Increase' or 'Decrease' 
                    "quantityChanged": "50", 
                    "reason": "Purchased"
                };
                const inventory = { message: 'Inventory Adjusted successfully.'};
                    // Stub the correct method: addUserService from UserService
                    sinon.stub(InventoryService, "adjustInventoryService").resolves(inventory);

                    await adjustInventory(req,res,next);
                    expect(res.status.calledWith(201)).to.be.true;
                    expect(res.json.calledWith(inventory)).to.be.true;
            });
    });
});
