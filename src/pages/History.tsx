import { Calendar, Users, MapPin, Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import vintageMap from '@/assets/vintage-map.jpg';
import historicCourthouse from '@/assets/historic-courthouse.jpg';

const History = () => {
  const timelineEvents = [
    {
      year: '1834',
      title: 'First Settlers Arrive',
      category: 'Settlement',
      description: 'The first European settlers establish a small homestead in what would become Pioneer Settlement. The Johnson family builds the first log cabin.',
      icon: Users,
      color: 'bg-heritage-brown'
    },
    {
      year: '1843',
      title: 'Agricultural Expansion',
      category: 'Agriculture',
      description: 'German and Scandinavian immigrants arrive and establish the first major farms in the Farmland Heights area, bringing advanced farming techniques.',
      icon: Landmark,
      color: 'bg-heritage-green'
    },
    {
      year: '1852',
      title: 'Oak Grove Development',
      category: 'Residential',
      description: 'Wealthy merchants and professionals begin building homes in Oak Grove, creating the first planned residential neighborhood.',
      icon: MapPin,
      color: 'bg-heritage-beige text-heritage-brown'
    },
    {
      year: '1858',
      title: 'Railroad Arrives',
      category: 'Transportation',
      description: 'The Great Northern Railroad establishes a depot, leading to the founding of Historic Downtown and rapid economic growth.',
      icon: Landmark,
      color: 'bg-heritage-brown'
    },
    {
      year: '1862',
      title: 'Courthouse Construction',
      category: 'Government',
      description: 'The Victorian courthouse is completed, establishing the town as the county seat and center of government for the region.',
      icon: Landmark,
      color: 'bg-primary'
    },
    {
      year: '1875',
      title: 'Mill Establishment',
      category: 'Industry',
      description: 'The Miller family builds the first flour mill along the river, leading to the development of the Riverside District.',
      icon: Landmark,
      color: 'bg-heritage-green'
    },
    {
      year: '1889',
      title: 'Textile Industry',
      category: 'Industry',
      description: 'Millbrook Textile Company is founded, creating Millbrook Village as a planned industrial community with worker housing.',
      icon: Users,
      color: 'bg-heritage-brown'
    },
    {
      year: '1920s',
      title: 'Golden Age',
      category: 'Growth',
      description: 'The region experiences its golden age with thriving agriculture, industry, and commerce. Many historic buildings are constructed.',
      icon: Calendar,
      color: 'bg-accent text-accent-foreground'
    },
    {
      year: '1950s-70s',
      title: 'Industrial Decline',
      category: 'Change',
      description: 'Textile mills close and agriculture consolidates, leading to population decline but preserving historic character.',
      icon: MapPin,
      color: 'bg-muted text-muted-foreground'
    },
    {
      year: '1990s-Present',
      title: 'Heritage Preservation',
      category: 'Preservation',
      description: 'Community-led efforts begin to preserve historic buildings and document local history, leading to heritage tourism.',
      icon: Landmark,
      color: 'bg-primary'
    }
  ];

  const notableFigures = [
    {
      name: 'Samuel Johnson',
      years: '1810-1890',
      role: 'First Settler',
      description: 'Built the first cabin in 1834 and established the area\'s first trading post.'
    },
    {
      name: 'Maria Miller',
      years: '1845-1925',
      role: 'Mill Owner & Philanthropist',
      description: 'Operated the flour mill and funded the first public school and library.'
    },
    {
      name: 'Judge William Hayes',
      years: '1820-1895',
      role: 'County Judge',
      description: 'First county judge and architect of many civic institutions.'
    },
    {
      name: 'Dr. Emma Richardson',
      years: '1870-1960',
      role: 'Community Doctor',
      description: 'First female doctor in the county, served rural communities for 50 years.'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-r from-heritage-brown/10 to-heritage-green/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">
            Our History
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the first pioneer cabin to thriving communities, explore the events,
            people, and milestones that shaped our local heritage over nearly two centuries.
          </p>
        </div>
      </section>

      {/* Historical Map Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Early Settlement
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our region's history begins with the first European settlers in 1834,
              who were drawn by fertile soil, abundant water, and transportation
              routes. This vintage map shows the early settlements and the natural
              features that influenced their development.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The river served as both a transportation route and power source,
              while the surrounding hills provided protection and good drainage
              for early farms and communities.
            </p>
          </div>
          <div className="relative">
            <img
              src={vintageMap}
              alt="Vintage map showing early settlements"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">
            Historical Timeline
          </h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full ${event.color} flex items-center justify-center`}>
                    <event.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <Card>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-serif text-primary">
                          {event.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{event.category}</Badge>
                          <span className="text-lg font-semibold text-primary">
                            {event.year}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Figures Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">
          Notable Figures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notableFigures.map((figure, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">
                  {figure.name}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {figure.years} • {figure.role}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {figure.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Historic Building Spotlight */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={historicCourthouse}
                alt="Historic courthouse building"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Historic Courthouse
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Built in 1862, our Victorian courthouse stands as the crown jewel of
                Historic Downtown. This magnificent building served as the center of
                government and justice for over 160 years.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">Completed: 1862</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Landmark className="h-5 w-5 text-primary" />
                  <span className="font-medium">Style: Victorian Gothic Revival</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Status: National Historic Landmark</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;