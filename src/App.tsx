import { useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ContentDetailPage from './components/ContentDetailPage'

function App() {
  // Comprehensive content database
  const allContent = useMemo(() => [
    // Pregnancy Content
    {
      id: 1,
      title: "What to Expect When You're Expecting",
      type: "Book Summary",
      creator: "Dr. Sarah Johnson",
      formats: ['youtube', 'podcast', 'article'],
      verified: true,
      stage: 'pregnancy',
      format: 'article',
      duration: '15 min read',
      rating: 4.8,
      views: '2.3M',
      description: "Complete guide covering all aspects of pregnancy from conception to birth",
      tags: ['pregnancy guide', 'expecting', 'prenatal care', 'first trimester']
    },
    {
      id: 2,
      title: "Pregnancy Yoga for Beginners",
      type: "Video Series",
      creator: "Yoga with Adriene",
      formats: ['youtube'],
      verified: true,
      stage: 'pregnancy',
      format: 'youtube',
      duration: '25 min',
      rating: 4.9,
      views: '1.8M',
      description: "Safe and gentle yoga practices for expecting mothers",
      tags: ['pregnancy yoga', 'exercise', 'prenatal fitness', 'relaxation']
    },
    {
      id: 3,
      title: "Preparing for Labor and Delivery",
      type: "Podcast Episode",
      creator: "The Birth Hour",
      formats: ['podcast'],
      verified: true,
      stage: 'pregnancy',
      format: 'podcast',
      duration: '45 min',
      rating: 4.7,
      views: '890K',
      description: "Expert advice on preparing mentally and physically for childbirth",
      tags: ['labor', 'delivery', 'birth plan', 'hospital bag']
    },
    {
      id: 4,
      title: "Pregnancy Nutrition Essentials",
      type: "Instagram Guide",
      creator: "@pregnancynutritionist",
      formats: ['instagram'],
      verified: true,
      stage: 'pregnancy',
      format: 'instagram',
      duration: '5 min',
      rating: 4.6,
      views: '650K',
      description: "Essential nutrients and foods for a healthy pregnancy",
      tags: ['pregnancy nutrition', 'prenatal vitamins', 'healthy eating', 'folic acid']
    },

    // Newborn Content
    {
      id: 5,
      title: "Newborn Sleep Training Essentials",
      type: "Video Series",
      creator: "Sleep Coach Maria",
      formats: ['youtube', 'instagram'],
      verified: true,
      stage: 'newborn',
      format: 'youtube',
      duration: '30 min',
      rating: 4.8,
      views: '1.2M',
      description: "Gentle sleep training methods for newborns 0-3 months",
      tags: ['newborn sleep', 'sleep training', 'baby sleep', 'night routine']
    },
    {
      id: 6,
      title: "Breastfeeding Success Guide",
      type: "Article",
      creator: "La Leche League",
      formats: ['article'],
      verified: true,
      stage: 'newborn',
      format: 'article',
      duration: '12 min read',
      rating: 4.9,
      views: '2.1M',
      description: "Complete guide to successful breastfeeding for new mothers",
      tags: ['breastfeeding', 'nursing', 'lactation', 'newborn feeding']
    },
    {
      id: 7,
      title: "Newborn Care Basics",
      type: "Podcast Episode",
      creator: "Pediatrician Mom",
      formats: ['podcast'],
      verified: true,
      stage: 'newborn',
      format: 'podcast',
      duration: '38 min',
      rating: 4.7,
      views: '750K',
      description: "Essential newborn care tips from a pediatrician and mother",
      tags: ['newborn care', 'baby basics', 'pediatric advice', 'first weeks']
    },

    // Toddler Content
    {
      id: 8,
      title: "Toddler Nutrition Made Simple",
      type: "Podcast Episode",
      creator: "Pediatric Nutritionist",
      formats: ['podcast', 'article'],
      verified: true,
      stage: 'toddler',
      format: 'podcast',
      duration: '42 min',
      rating: 4.8,
      views: '920K',
      description: "Practical nutrition advice for picky toddler eaters",
      tags: ['toddler nutrition', 'picky eating', 'healthy meals', 'meal planning']
    },
    {
      id: 9,
      title: "Potty Training Success Stories",
      type: "Video Guide",
      creator: "Toddler Whisperer",
      formats: ['youtube'],
      verified: true,
      stage: 'toddler',
      format: 'youtube',
      duration: '22 min',
      rating: 4.6,
      views: '1.5M',
      description: "Step-by-step potty training methods that actually work",
      tags: ['potty training', 'toilet training', 'toddler milestones', 'independence']
    },
    {
      id: 10,
      title: "Managing Toddler Tantrums",
      type: "Instagram Tips",
      creator: "@toddlerpsychologist",
      formats: ['instagram'],
      verified: true,
      stage: 'toddler',
      format: 'instagram',
      duration: '3 min',
      rating: 4.7,
      views: '580K',
      description: "Evidence-based strategies for handling toddler meltdowns",
      tags: ['tantrums', 'behavior management', 'emotional regulation', 'discipline']
    },

    // Preschool Content
    {
      id: 11,
      title: "Preparing for Preschool",
      type: "Article Series",
      creator: "Early Childhood Educator",
      formats: ['article'],
      verified: true,
      stage: 'preschool',
      format: 'article',
      duration: '18 min read',
      rating: 4.8,
      views: '1.1M',
      description: "Complete guide to preparing your child for their first school experience",
      tags: ['preschool prep', 'school readiness', 'separation anxiety', 'social skills']
    },
    {
      id: 12,
      title: "Learning Through Play",
      type: "Video Series",
      creator: "Play-Based Learning Expert",
      formats: ['youtube'],
      verified: true,
      stage: 'preschool',
      format: 'youtube',
      duration: '35 min',
      rating: 4.9,
      views: '890K',
      description: "Educational activities that make learning fun for preschoolers",
      tags: ['educational play', 'learning activities', 'cognitive development', 'creativity']
    }
  ], [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage allContent={allContent} />} />
        <Route path="/content/:id" element={<ContentDetailPage allContent={allContent} />} />
      </Routes>
    </Router>
  )
}

export default App