module.exports = {
  baseUrl: browser.baseUrl,
  widgetUrl: browser.params.widgetUrl,
  entities: {
    loginMember: browser.params.login.member,
    loginCompany: browser.params.login.company,
    loginNonprofit: browser.params.login.nonprofit,
    password: browser.params.login.password
  },
  dataPop:{
    atester1ID: 'atester1@ammadoqa.com',
    atester2ID: 'atester2@ammadoqa.com'
  }
};
