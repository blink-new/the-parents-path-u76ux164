import { useState } from 'react'
import { Search, Play, Youtube, Instagram, Music, BookOpen, Sparkles, Users, Shield, ArrowRight } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStage, setSelectedStage] = useState('pregnancy')

  const parentingStages = [
    { id: 'pregnancy', label: 'Pregnancy', emoji: '🤰' },
    { id: 'newborn', label: 'Newborn', emoji: '👶' },
    { id: 'toddler', label: 'Toddler', emoji: '🧒' },
    { id: 'preschool', label: 'Preschool', emoji: '🎒' }
  ]

  const contentFormats = [
    { icon: Youtube, label: 'YouTube Videos', color: 'text-red-500', count: '2.3K' },
    { icon: Instagram, label: 'Instagram Creators', color: 'text-pink-500', count: '1.8K' },
    { icon: Music, label: 'Spotify Podcasts', color: 'text-green-500', count: '950' },
    { icon: BookOpen, label: 'Academic Studies', color: 'text-blue-500', count: '420' }
  ]

  const featuredContent = [
    {
      title: "What to Expect When You're Expecting",
      type: "Book Summary",
      creator: "Dr. Sarah Johnson",
      formats: ['youtube', 'podcast', 'article'],
      verified: true,
      stage: 'pregnancy'
    },
    {
      title: "Newborn Sleep Training Essentials",
      type: "Video Series",
      creator: "Sleep Coach Maria",
      formats: ['youtube', 'instagram'],
      verified: true,
      stage: 'newborn'
    },
    {
      title: "Toddler Nutrition Made Simple",
      type: "Podcast Episode",
      creator: "Pediatric Nutritionist",
      formats: ['podcast', 'article'],
      verified: true,
      stage: 'toddler'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
              </div>
              <span className="text-xl font-semibold text-foreground">The Parents Path</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discover</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Creators</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Resources</a>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Content Discovery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your trusted guide through
              <span className="text-primary"> every parenting stage</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover personalized content from trusted influencers, experts, and resources. 
              Get AI-generated podcast summaries from any combination of sources.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Enter a book, topic, or parenting question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-32 py-6 text-lg rounded-2xl border-2 focus:border-primary"
              />
              <Button 
                size="lg" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl"
              >
                Search
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Parenting Stage Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {parentingStages.map((stage) => (
              <Button
                key={stage.id}
                variant={selectedStage === stage.id ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedStage(stage.id)}
                className="rounded-full px-6"
              >
                <span className="mr-2">{stage.emoji}</span>
                {stage.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Formats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Multi-format content discovery
            </h2>
            <p className="text-lg text-muted-foreground">
              Find trusted content across all your favorite platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentFormats.map((format, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <format.icon className={`w-12 h-12 mx-auto mb-3 ${format.color}`} />
                  <CardTitle className="text-lg">{format.label}</CardTitle>
                  <CardDescription>{format.count} resources</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Podcast Generator Feature */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-4">
                AI-Generated Podcast Summaries
              </CardTitle>
              <CardDescription className="text-lg">
                Select any combination of content and get a personalized podcast episode 
                summarizing the key insights for easy listening and sharing.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Book + Podcast
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Youtube className="w-4 h-4 mr-2" />
                  Video + Article
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Music className="w-4 h-4 mr-2" />
                  Multiple Podcasts
                </Badge>
              </div>
              <Button size="lg" className="rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" />
                Try AI Podcast Generator
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trending content for {parentingStages.find(s => s.id === selectedStage)?.label.toLowerCase()}
            </h2>
            <p className="text-lg text-muted-foreground">
              Curated by experts and loved by parents like you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((content, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{content.type}</Badge>
                    {content.verified && (
                      <Shield className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">{content.title}</CardTitle>
                  <CardDescription>by {content.creator}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    {content.formats.includes('youtube') && (
                      <Youtube className="w-4 h-4 text-red-500" />
                    )}
                    {content.formats.includes('instagram') && (
                      <Instagram className="w-4 h-4 text-pink-500" />
                    )}
                    {content.formats.includes('podcast') && (
                      <Music className="w-4 h-4 text-green-500" />
                    )}
                    {content.formats.includes('article') && (
                      <BookOpen className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Trusted by thousands of parents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Verified</h3>
              <p className="text-muted-foreground">All content reviewed by pediatricians and parenting experts</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">Recommendations from real parents in similar situations</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Personalized</h3>
              <p className="text-muted-foreground">Content tailored to your specific parenting stage and needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PP</span>
                </div>
                <span className="text-xl font-semibold">The Parents Path</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted guide through every parenting stage. Discover personalized content 
                from experts and create AI-powered podcast summaries.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Discover</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Creators</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">AI Podcasts</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 The Parents Path. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App