const sections = {
    home: {
        title: 'Home',
        content: `
          <h2>Welcome to Our Digital Haven</h2>
          <p>Here, you can immerse yourself in a world of knowledge and discovery. Explore a curated collection of the latest updates, breaking news, thought-provoking articles, and captivating stories spanning a wide range of fields and industries.</p>
      
          <h3>Embrace the Boundless Exploration</h3>
          <p>Whether your interests lie in the realms of cutting-edge technology, groundbreaking scientific discoveries, artistic endeavors, or societal insights, our mission is to offer you a platform that keeps you engaged, informed, and inspired.</p>
      
          <h3>Dive Into the Uncharted Waters</h3>
          <p>Dive into a sea of innovation, where every click opens up new horizons of understanding. Embark on a journey that connects you with the forefront of human achievement, all from the comfort of your digital oasis.</p>
      
          <h3>Join the Quest for Knowledge</h3>
          <p>Join us in this endeavor to illuminate minds, ignite curiosity, and empower change. As you navigate through our pages, remember that knowledge knows no bounds, and here, the quest for learning is endless.</p>
        `
      },
      
    college: {
      title: 'College Help',
      content: 'Get assistance and resources for your college journey.'
    },
    job: {
      title: 'Job Finder',
      content: 'Explore job opportunities and tips for job hunting.'
    },
    about: {
      title: 'About Us',
      content: 'Learn more about our Girls Who Code project and the Leadership Academy.'
    },
    contact: {
      title: 'Contact',
      content: 'Reach out to us for any inquiries or feedback.'
    }
  };
  
  function navigate(section) {
    const sectionTitle = document.getElementById('sectionTitle');
    const sectionContent = document.getElementById('sectionContent');
  
    sectionTitle.textContent = sections[section].title;
    sectionContent.textContent = sections[section].content;
  }
  
