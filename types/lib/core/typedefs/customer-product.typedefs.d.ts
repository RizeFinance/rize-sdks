export type CustomerProduct = {
    /**
     * - A unique identifier generated by Rize
     */
    uid: string;
    /**
     * - A unique identifier for a Customer
     */
    customer_uid: string;
    /**
     * - The Customer's email address
     */
    customer_email: string;
    /**
     * - A unique identifier for a Product
     */
    product_uid: string;
    /**
     * - The name of the Product
     */
    product_name: string;
    /**
     * - A unique identifier for a Program
     */
    program_uid: string;
};
export type CustomerProductListQuery = {
    /**
     * - Filter by Program. Only return Customer Products belonging to the submitted Program.
     */
    program_uid?: string;
    /**
     * - Filter by Product. Only return Customer Products belonging to the submitted Product.
     */
    product_uid?: string;
    /**
     * - Filter by Customer. Multiple values are allowed.
     */
    customer_uid?: Array<string>;
    /**
     * - Maximum number of items to retrieve. This filter is automatically applied with the default value if not given. Default = 100.
     */
    limit?: number;
    /**
     * - Index of the items to start retrieving from. Default = 0.
     */
    offset?: number;
};
