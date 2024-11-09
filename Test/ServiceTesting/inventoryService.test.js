import {expect} from "chai"
import sinon from "sinon"
import inventoryRepo from "../../repository/inventoryRepo.js";
import InventoryService from "../../services/InventoryService.js";

describe('Inventory Service', () => {
    afterEach(() => {
        sinon.restore();
    });
    describe('add Inventory', () => {
        it('should adjust an inventory and return status 201',
            async () => { 
                let productId = "4"; 
                let adjustmentDate = "2024-10-20 12:00:42";
                let adjustmentType =  "Decrease";
                let quantityChanged = 5;
                let reason = "Purchased";

                    sinon.stub(inventoryRepo, "adjustInventoryRepo").resolves('Success');

                    await InventoryService.adjustInventoryService(productId, adjustmentDate, adjustmentType, quantityChanged, reason);
                    expect(inventoryRepo.adjustInventoryRepo.calledOnce).to.be.true;
            });
    });
});
