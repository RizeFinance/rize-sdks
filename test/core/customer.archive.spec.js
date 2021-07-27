'use strict';

require('./compliance-workflow.spec');
require('./synthetic-account.spec');
require('./transfer.spec');
require('./debit-card.spec');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;
const delayAsync = require('../helpers/delayAsync');
const rizeClient = require('../helpers/rizeClient');

describe('Customer', () => {
    let customerUid;

    before(() => {
        customerUid = process.env.TEST_CUSTOMER_UID;
    });

    describe('archive', () => {
        it('Throws an error if "uid" is empty', () => {
            const promise = rizeClient.customer.archive(' ');
            return expect(promise).to.eventually.be.rejectedWith('Customer "uid" is required.');
        });

        it('Archives the customer', async () => {
            await delayAsync(70000);
            await rizeClient.customer.archive(customerUid);
            const updatedCustomer = await rizeClient.customer.get(customerUid);

            expect(updatedCustomer.status).equals('archived');
        }).timeout(70000);
    });
});