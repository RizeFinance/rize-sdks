/**
 * @typedef {Object} AccountError
 * @property {string} error_code
 * @property {string} error_name
 * @property {string} error_description
 */

/**
 * @typedef {Object} CustodialAccount
 * @property {string} uid - A unique identifier generated by Rize
 * @property {string} external_uid - A unique identifier Client supplies. It should be given when creating a new resource and must be unique within the resource type. If the same value is given, no new resource will be created.
 * @property {string} customer_uid - A UID referring to the customer this Custodial Account belongs to
 * @property {Array<string>} pool_uid - A UID referring to the pool this Custodial Account belongs to
 * @property {string | null} program_service_offering_uid - A UID referring to the specific Program Service Offering for which this account was created. Nullable if asset.
 * @property {'dda'|'dda_cash_external'|'dda_cash_received'} type
 * A value indicating the overall state of this Customer:
 * - ***dda*** - Are liability DDA accounts. Any asset movements in or out of the brick-and-mortar accounts will be journaled in the dda Custodial Accounts. Balances shown in the dda accounts are the balances the owner Customers have.
 * - ***dda_cash_external*** - Are asset accounts, representing external accounts. When ODFI transfers, initated by a Synthetic Transfer from or to external Synthetic Accounts, are settled, the dda_cash_external Custodial Accounts will be credited or debited.
 * - ***dda_cash_received*** - Are asset cash accounts. When RDFI transfers, initiated outside of Rize from or to Custodial Accounts, are settled, the dda_cash_received Custodial Accounts will be credited or debited.
 * @property {boolean} liability - Liability or asset. Liability Custodial Accounts represent real accounts at Financial Institutions. Asset accounts are used for accounting purposes and may be generated by Rize during events such as new custodial account creations or new external account connections.
 * @property {string| null} name - A friendly name used to identify the account at the Custodial Partner.
 * @property {boolean} primary_account - The date and time when the Customer was locked. This field will be null if and only if the lock_reason is null.
 * @property {'active' | 'archived' | 'good' | null} status
 * A value indicating the overall state of this Custodial Account (nullable if account type is asset):
 * - ***active*** - The Custodial Account is opened and available for asset movement and balance inquiries.
 * - ***archived*** - The Custodial Account is archived. All archived Custodial Accounts will have a $0.00 balance. This generally occurs when a Customer is archived or leaves the Service Offering that requires this Custodial Account.
 * @property {Array<AccountError>} account_errors - A list of errors related to this account. These are passed through during interactions with the underlying Custodial Partner and can help with resolving customer issues. Only provided for accounts that are in an error or manual_review status.
 * @property {string} net_usd_balance - The current settled balance of this Custodial Account in US Dollars
 * @property {string} net_usd_pending_balance - The sum of all pending transactions for this Custodial Account in US Dollars
 * @property {string} net_usd_available_balance - The balance available to spend calculated as Normal balance less any withdrawals. Pending deposits are not included
 * @property {string | null} account_number - The ACH account number that can be used to make transfers into/out of this account. Nullable if asset.
 * @property {string | null} account_number_masked - Last 4 digits of the ACH account number. Nullable if asset.
 * @property {string | null} routing_number - The ABA routing number associated with the Custodial Partner. Nullable if asset.
 * @property {Date} opened_at - The DateTime at which this account was created
 * @property {Date} closed_at - The DateTime at which this account was closed
 */

/**
  * @typedef {Object} CustodialAccountListQuery
  * @property {Array<string>} [customer_uid] - Filter by Customer. Multiple values are allowed
  * @property {string} [external_uid] - A unique, immutable id provided Clien
  * @property {string} [limit] -  Maximum number of items to retrieve. This filter is automatically applied with the default value if not given. Default: 100
  * @property {string} [offset] - Index of the items to start retrieving from. Default: 0
  * @property {string} [liability] - Filter by liability or asset
  * @property {Array<string>} [type] - Filter by type. Multiple values are allowed.
  */

module.exports = {};