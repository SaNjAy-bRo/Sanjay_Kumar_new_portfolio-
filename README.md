# Portfolio Website

A modern, responsive portfolio website built with React.js featuring smooth animations, professional design, and mobile-first approach.

## Features

- 🎨 **Modern Design**: Beautiful gradient colors and glassmorphism effects
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Smooth Animations**: Framer Motion animations and CSS transitions
- 📧 **Contact Form**: EmailJS integration for contact form
- 🗺️ **Interactive Map**: Embedded Google Maps for location
- 🎯 **Single Page**: Smooth scrolling navigation
- 🌟 **Professional Sections**:
  - Hero/About Me
  - Education Timeline
  - Skills with Progress Bars
  - Projects Showcase
  - Contact Form with Map
  - Professional Footer

## Technologies Used

- **React.js** - Frontend framework
- **CSS3** - Styling with modern features
- **EmailJS** - Contact form integration
- **Google Maps API** - Location embedding
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### EmailJS Setup

To enable the contact form functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update the Contact.js file with your credentials:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  formData,
  'YOUR_PUBLIC_KEY' // Replace with your public key
);
```

### Customization

1. **Personal Information**: Update the following files with your information:
   - `src/components/Hero.js` - Name, title, description
   - `src/components/About.js` - About content and stats
   - `src/components/Education.js` - Education details
   - `src/components/Contact.js` - Contact information and social links
   - `src/components/Footer.js` - Footer content and social links

2. **Projects**: Update `src/components/Projects.js` with your projects:
   - Add project images
   - Update project descriptions
   - Add live demo and GitHub links
   - Modify technologies used

3. **Skills**: Update `src/components/Skills.js` with your skills and proficiency levels

4. **Colors**: Modify the color scheme in `src/App.css` and individual component CSS files

5. **Images**: Replace placeholder images with your actual photos and project screenshots

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js & .css
│   │   ├── Hero.js & .css
│   │   ├── About.js & .css
│   │   ├── Education.js & .css
│   │   ├── Skills.js & .css
│   │   ├── Projects.js & .css
│   │   ├── Contact.js & .css
│   │   └── Footer.js & .css
│   ├── App.js & .css
│   ├── index.js & .css
│   └── index.css
├── package.json
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)
