import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  Play, 
  Youtube, 
  Instagram, 
  Music, 
  BookOpen, 
  Shield, 
  Star, 
  Clock, 
  Users, 
  Heart,
  Share2,
  Bookmark,
  ExternalLink,
  Download,
  MessageCircle,
  ThumbsUp,
  Eye,
  Calendar,
  Tag,
  Sparkles
} from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

interface ContentDetailPageProps {
  allContent: any[]
}

export default function ContentDetailPage({ allContent }: ContentDetailPageProps) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const content = allContent.find(item => item.id === parseInt(id || '0'))

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Content not found</h2>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'youtube': return <Youtube className="w-5 h-5 text-red-500" />
      case 'instagram': return <Instagram className="w-5 h-5 text-pink-500" />
      case 'podcast': return <Music className="w-5 h-5 text-green-500" />
      case 'article': return <BookOpen className="w-5 h-5 text-blue-500" />
      default: return <BookOpen className="w-5 h-5 text-gray-500" />
    }
  }

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'youtube': return 'bg-red-500'
      case 'instagram': return 'bg-pink-500'
      case 'podcast': return 'bg-green-500'
      case 'article': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  const parentingStages = [
    { id: 'pregnancy', label: 'Pregnancy', emoji: '🤰' },
    { id: 'newborn', label: 'Newborn', emoji: '👶' },
    { id: 'toddler', label: 'Toddler', emoji: '🧒' },
    { id: 'preschool', label: 'Preschool', emoji: '🎒' }
  ]

  const currentStage = parentingStages.find(s => s.id === content.stage)

  // Related content (same stage, different content)
  const relatedContent = allContent
    .filter(item => item.stage === content.stage && item.id !== content.id)
    .slice(0, 3)

  // Mock detailed content based on the content type
  const getDetailedContent = () => {
    switch (content.format) {
      case 'youtube':
        return {
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          chapters: [
            { time: '0:00', title: 'Introduction' },
            { time: '2:30', title: 'Key Concepts' },
            { time: '8:15', title: 'Practical Tips' },
            { time: '15:45', title: 'Common Mistakes' },
            { time: '22:10', title: 'Summary & Next Steps' }
          ],
          transcript: `Welcome to today's video on ${content.title}. In this comprehensive guide, we'll cover everything you need to know about ${content.description.toLowerCase()}. 

First, let's start with the basics. Understanding the fundamentals is crucial for success in this area. Many parents struggle with this topic, but with the right approach, you can navigate it confidently.

Key points to remember:
• Start with small, manageable steps
• Be patient with yourself and your child
• Consistency is more important than perfection
• Every child develops at their own pace

Throughout this journey, remember that you're not alone. Thousands of parents have successfully navigated this stage, and you can too. The most important thing is to stay informed, trust your instincts, and seek support when needed.`
        }
      case 'podcast':
        return {
          audioPlayer: true,
          episodes: [
            { number: 1, title: content.title, duration: content.duration },
            { number: 2, title: 'Follow-up Discussion', duration: '25 min' },
            { number: 3, title: 'Q&A Session', duration: '18 min' }
          ],
          showNotes: `In this episode, we dive deep into ${content.title.toLowerCase()}. Our expert guest shares practical insights and evidence-based strategies that have helped thousands of families.

What you'll learn:
• The science behind the topic
• Step-by-step implementation guide
• Common challenges and solutions
• Real parent success stories

Resources mentioned:
• Research study on child development
• Recommended books and articles
• Support groups and communities
• Professional consultation options

Remember to subscribe for more parenting insights and share this episode with other parents who might benefit from this information.`
        }
      case 'instagram':
        return {
          posts: [
            { type: 'carousel', slides: 5, likes: '12.3K', comments: '456' },
            { type: 'reel', duration: '30s', likes: '8.7K', comments: '234' },
            { type: 'story_highlight', stories: 8, views: '15.2K' }
          ],
          captions: `✨ ${content.title} ✨

Swipe through for essential tips that every parent should know! 📱➡️

🔹 Tip 1: Start with understanding your child's unique needs
🔹 Tip 2: Create consistent routines that work for your family
🔹 Tip 3: Don't compare your journey to others
🔹 Tip 4: Celebrate small wins along the way
🔹 Tip 5: Remember that progress isn't always linear

Save this post for later and share with a parent friend who needs to see this! 💕

What's your biggest challenge in this area? Let me know in the comments! 👇

#ParentingTips #${content.stage}Life #ParentSupport #FamilyLife`
        }
      case 'article':
        return {
          readingTime: content.duration,
          wordCount: '2,500 words',
          sections: [
            'Introduction',
            'Understanding the Basics',
            'Step-by-Step Guide',
            'Common Challenges',
            'Expert Tips',
            'Real Parent Stories',
            'Conclusion & Next Steps'
          ],
          excerpt: `This comprehensive guide covers everything you need to know about ${content.title.toLowerCase()}. Based on the latest research and expert recommendations, we'll walk you through practical strategies that work for real families.

Whether you're just starting this journey or looking to refine your approach, this article provides evidence-based insights and actionable advice. We've included real parent stories, expert interviews, and research-backed strategies to help you succeed.

The information presented here has been reviewed by pediatric experts and tested by thousands of families. You'll find practical tips you can implement immediately, along with long-term strategies for continued success.`
        }
      default:
        return {}
    }
  }

  const detailedContent = getDetailedContent()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PP</span>
                </div>
                <span className="text-xl font-semibold text-foreground">The Parents Path</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button 
                variant={isBookmarked ? "default" : "outline"} 
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                {isBookmarked ? 'Saved' : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Content Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                {getFormatIcon(content.format)}
                <Badge variant="outline">{content.type}</Badge>
                {content.verified && (
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">Verified</span>
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {content.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${content.creator}`} />
                    <AvatarFallback>{content.creator.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{content.creator}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>2 days ago</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{content.duration}</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{content.rating}</span>
                  <span className="text-muted-foreground">(2,341 reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{content.views} views</span>
                </div>
                <Badge variant="secondary">
                  {currentStage?.emoji} {currentStage?.label}
                </Badge>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {content.description}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 mb-8">
                <Button size="lg" className={`${getFormatColor(content.format)} hover:opacity-90`}>
                  <Play className="w-5 h-5 mr-2" />
                  {content.format === 'youtube' ? 'Watch Video' : 
                   content.format === 'podcast' ? 'Listen Now' :
                   content.format === 'instagram' ? 'View Posts' : 'Read Article'}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <ThumbsUp className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current text-blue-500' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'} (1.2K)
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Comments (89)
                </Button>
              </div>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="content" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="related">Related</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="mt-6">
                {content.format === 'youtube' && (
                  <div className="space-y-6">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">Video Player</p>
                        <p className="text-sm text-gray-500">Click to play {content.title}</p>
                      </div>
                    </div>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Video Chapters</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {detailedContent.chapters?.map((chapter, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2 hover:bg-muted rounded cursor-pointer">
                              <span className="text-sm font-mono text-muted-foreground w-12">{chapter.time}</span>
                              <span className="text-sm">{chapter.title}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Transcript</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-line">{detailedContent.transcript}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {content.format === 'podcast' && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Audio Player</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-100 rounded-lg p-8 text-center">
                          <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 mb-2">Audio Player</p>
                          <p className="text-sm text-gray-500">Click to play {content.title}</p>
                          <div className="mt-4 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>12:34</span>
                            <span>{content.duration}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Show Notes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-line">{detailedContent.showNotes}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {content.format === 'instagram' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {detailedContent.posts?.map((post, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="aspect-square bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg mb-3 flex items-center justify-center">
                              <Instagram className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-sm">
                              <p className="font-medium capitalize">{post.type.replace('_', ' ')}</p>
                              <div className="flex items-center space-x-4 text-muted-foreground mt-2">
                                <span>❤️ {post.likes}</span>
                                <span>💬 {post.comments}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Post Caption</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="prose prose-sm max-w-none">
                          <p className="whitespace-pre-line">{detailedContent.captions}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {content.format === 'article' && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Article Overview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{detailedContent.readingTime}</div>
                            <div className="text-sm text-muted-foreground">Reading Time</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{detailedContent.wordCount}</div>
                            <div className="text-sm text-muted-foreground">Word Count</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{detailedContent.sections?.length}</div>
                            <div className="text-sm text-muted-foreground">Sections</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">Expert</div>
                            <div className="text-sm text-muted-foreground">Reviewed</div>
                          </div>
                        </div>
                        
                        <div className="prose prose-sm max-w-none">
                          <p>{detailedContent.excerpt}</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Table of Contents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {detailedContent.sections?.map((section, index) => (
                            <div key={index} className="flex items-center space-x-3 p-2 hover:bg-muted rounded cursor-pointer">
                              <span className="text-sm font-mono text-muted-foreground w-8">{index + 1}.</span>
                              <span className="text-sm">{section}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Creator Information</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="text-muted-foreground">Name:</span> {content.creator}</p>
                          <p><span className="text-muted-foreground">Verified:</span> {content.verified ? 'Yes' : 'No'}</p>
                          <p><span className="text-muted-foreground">Followers:</span> 125K</p>
                          <p><span className="text-muted-foreground">Content Count:</span> 89 resources</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Content Metrics</h4>
                        <div className="space-y-2 text-sm">
                          <p><span className="text-muted-foreground">Views:</span> {content.views}</p>
                          <p><span className="text-muted-foreground">Rating:</span> {content.rating}/5.0</p>
                          <p><span className="text-muted-foreground">Duration:</span> {content.duration}</p>
                          <p><span className="text-muted-foreground">Published:</span> 2 days ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {content.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Available Formats</h4>
                      <div className="flex space-x-2">
                        {content.formats.map((format, index) => (
                          <Badge key={index} variant="secondary">
                            {format === 'youtube' && <Youtube className="w-3 h-3 mr-1" />}
                            {format === 'instagram' && <Instagram className="w-3 h-3 mr-1" />}
                            {format === 'podcast' && <Music className="w-3 h-3 mr-1" />}
                            {format === 'article' && <BookOpen className="w-3 h-3 mr-1" />}
                            {format}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reviews & Ratings</CardTitle>
                      <CardDescription>What parents are saying about this content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <div className="text-center mb-4">
                            <div className="text-4xl font-bold text-primary">{content.rating}</div>
                            <div className="flex justify-center mb-2">
                              {[1,2,3,4,5].map(star => (
                                <Star key={star} className={`w-4 h-4 ${star <= Math.floor(content.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                              ))}
                            </div>
                            <div className="text-sm text-muted-foreground">Based on 2,341 reviews</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[5,4,3,2,1].map(rating => (
                            <div key={rating} className="flex items-center space-x-2">
                              <span className="text-sm w-8">{rating}★</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-yellow-400 h-2 rounded-full" 
                                  style={{ width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-muted-foreground w-12">
                                {rating === 5 ? '70%' : rating === 4 ? '20%' : rating === 3 ? '7%' : rating === 2 ? '2%' : '1%'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator className="mb-6" />

                      <div className="space-y-4">
                        {[
                          { name: 'Sarah M.', rating: 5, comment: 'This was exactly what I needed! The practical tips were so helpful and easy to implement.', date: '2 days ago', helpful: 23 },
                          { name: 'Mike D.', rating: 5, comment: 'As a first-time dad, this content gave me confidence. Highly recommend to other new parents.', date: '1 week ago', helpful: 18 },
                          { name: 'Jennifer L.', rating: 4, comment: 'Great information overall. Would love to see more examples for different age ranges.', date: '2 weeks ago', helpful: 12 }
                        ].map((review, index) => (
                          <Card key={index}>
                            <CardContent className="pt-4">
                              <div className="flex items-start space-x-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className="font-medium text-sm">{review.name}</span>
                                    <div className="flex">
                                      {[1,2,3,4,5].map(star => (
                                        <Star key={star} className={`w-3 h-3 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                      ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground">{review.date}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                    <button className="flex items-center space-x-1 hover:text-foreground">
                                      <ThumbsUp className="w-3 h-3" />
                                      <span>Helpful ({review.helpful})</span>
                                    </button>
                                    <button className="hover:text-foreground">Reply</button>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="related" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedContent.map((item) => (
                    <Card key={item.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/content/${item.id}`)}>
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {getFormatIcon(item.format)}
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                          {item.verified && (
                            <Shield className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                        <CardDescription>by {item.creator}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{item.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{item.rating}</span>
                            </div>
                          </div>
                          <span>{item.views} views</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* AI Podcast Generator */}
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">AI Podcast Summary</CardTitle>
                  </div>
                  <CardDescription>
                    Generate a personalized podcast episode from this content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Create Podcast
                  </Button>
                </CardContent>
              </Card>

              {/* Creator Profile */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About the Creator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${content.creator}`} />
                      <AvatarFallback>{content.creator.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{content.creator}</div>
                      <div className="text-sm text-muted-foreground">Parenting Expert</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Trusted by thousands of parents worldwide. Specializes in {currentStage?.label.toLowerCase()} stage guidance.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center text-sm mb-4">
                    <div>
                      <div className="font-bold text-primary">125K</div>
                      <div className="text-muted-foreground">Followers</div>
                    </div>
                    <div>
                      <div className="font-bold text-primary">89</div>
                      <div className="text-muted-foreground">Resources</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Users className="w-4 h-4 mr-2" />
                    Follow Creator
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resource
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Original Source
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share with Friends
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}