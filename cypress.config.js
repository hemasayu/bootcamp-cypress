module.exports = {
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com',

    setupNodeEvents(on, config) {  
    },
    env: {
      orange_url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
      production_url: 'instagram.com',
      username:'Admin',
      password:'admin123'
    },
  }
};

