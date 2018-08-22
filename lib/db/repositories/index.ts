import { PurchaseRepository } from "./purchase";
import { UserRepository } from "./user";

// Database Interface Extensions:
interface IExtensions {
    user: UserRepository,
    purchase: PurchaseRepository
}

export {
    IExtensions,
    UserRepository,
    PurchaseRepository
};