module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },

    QA: {
      host: "localhost",
      port: 8545,
      network_id: "3",
      from: "0x2f17516e4be745752185a891f53ac968d6379181"
    },

       PRODUCTION: {
      host: "localhost",
      prot: 8545,
      network_id: "1"
    }
  }
};
