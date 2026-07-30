# 🏙️ Civic Issue Reporting System

A full-stack MERN application that enables citizens to report civic issues such as potholes, garbage dumps, water leakage, streetlight failures, and road damage. Users can upload images, share their location, and track the status of their complaints, while administrators can efficiently manage and resolve reported issues.

---

## 🚀 FEATURES

### User

- Secure Registration & Login (JWT Authentication)
- Report Civic Issues
- Upload Images
- Automatic GPS Location Detection
- Interactive Map while Reporting
- View Submitted Complaints
- Track Complaint Status
- View Complaint Details
- Responsive User Dashboard

### Admin

- Secure Admin Login
- View All Complaints
- View Complaint Details
- Interactive Map showing Complaint Location
- Update Complaint Status
- Delete Complaints
- Admin Dashboard

---

## TECH STACK

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- React Toastify
- Axios
- React Leaflet
- OpenStreetMap

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Cloudinary

---

##  Project Structure

```
client/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── context/
│   ├── services/
│   └── api/

server/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
└── server.js
```

## INSTALLATION

### Clone Repository

```bash
git clone https://github.com/your-username/CivicIssueReportingSystem.git
```

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUD_NAME=your_cloudinary_cloud_name

CLOUD_API_KEY=your_cloudinary_api_key

CLOUD_API_SECRET=your_cloudinary_api_secret
```

---

## Future Enhancements

- Email Notifications
- AI-based Complaint Categorization
- Complaint Analytics Dashboard
- Mobile Application
- Multi-language Support

---

## Author

**Mohsin Khan**

Information Technology Undergraduate

UIT RGPV, Bhopal

---

## Support

If you like this project, consider giving it a ⭐ on GitHub.