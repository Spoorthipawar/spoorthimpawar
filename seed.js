// Run with: node seed.js
// Seeds a few sample services, an admin user, and testimonials for local testing.
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const User = require('./models/User');
const Service = require('./models/Service');
const Testimonial = require('./models/Testimonial');

const run = async () => {
  await connectDB();

  await Service.deleteMany({});
  await Testimonial.deleteMany({});

  await Service.insertMany([
    {
      title: 'Wardrobe Edit',
      slug: 'wardrobe-edit',
      description: 'A full closet audit over video call - what to keep, alter, or let go, with a shopping list to fill the gaps.',
      durationMinutes: 60,
      price: 15000,
      category: 'wardrobe'
    },
    {
      title: 'Event Styling',
      slug: 'event-styling',
      description: 'One-off outfit planning for a wedding, gala, or big occasion, including accessories and fit notes.',
      durationMinutes: 45,
      price: 9000,
      category: 'event'
    },
    {
      title: 'Personal Shopping Session',
      slug: 'personal-shopping',
      description: 'Live guided shopping, real-time feedback while you try things on or browse online.',
      durationMinutes: 90,
      price: 22000,
      category: 'personal-shopping'
    },
    {
      title: 'Colour & Season Analysis',
      slug: 'colour-analysis',
      description: 'Find your best palette and learn which tones make you look effortlessly put-together.',
      durationMinutes: 60,
      price: 12000,
      category: 'color-analysis'
    }
  ]);

  await Testimonial.insertMany([
    { clientName: 'Priya S.', quote: 'My wardrobe finally makes sense. Booking and the call itself were both so easy.', rating: 5, isApproved: true },
    { clientName: 'Emma R.', quote: 'Went into the event styling session unsure and came out with three complete outfits.', rating: 5, isApproved: true },
    { clientName: 'Tom K.', quote: 'Straightforward, no-nonsense advice delivered with real warmth.', rating: 5, isApproved: true }
  ]);

  const adminExists = await User.findOne({ email: 'admin@stylingbiz.com' });
  if (!adminExists) {
    await User.create({
      name: 'Admin',
      email: 'admin@stylingbiz.com',
      password: 'ChangeMe123!',
      role: 'admin'
    });
    console.log('Admin created: admin@stylingbiz.com / ChangeMe123!');
  }

  console.log('Seed complete.');
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
