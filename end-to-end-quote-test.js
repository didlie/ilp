'use strict'

const ILQP = require('.').ILQP
const crypto = require('crypto')
const PluginBells = require('ilp-plugin-bells')

const sender = new PluginBells({
  account: 'https://red.ilpdemo.org/ledger/accounts/alice',
  password: 'alice'
})

const receiver = new PluginBells({
  account: 'https://blue.ilpdemo.org/ledger/accounts/bob',
  password: 'bobbob'
})

async function main () {
  await sender.connect()
  await receiver.connect()

  const stopListening = ILQP.listenForEndToEndQuotes(receiver)

  const quote = await ILQP.quoteEndToEnd(sender, {
    destinationAccount: receiver.getAccount() + '.sdflkj',
    sourceAmount: '1000',
    connector: 'us.usd.red.charles'
  })
  console.log(quote)

}

main().catch(err => console.log(err))