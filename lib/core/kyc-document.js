/**
 * The KYC Document service class
 */
class KYCDocumentService {
    /**
     * @hideconstructor
     * @param {import('axios').AxiosInstance} api
     * @param {import('./auth')} auth
     */
    constructor(api, auth) {
        /** @ignore @protected */ this._api = api;
        /** @ignore @protected */ this._auth = auth;
    }
}

module.exports = KYCDocumentService;