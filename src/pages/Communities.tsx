import { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import heritageFarms from '@/assets/heritage-farms.jpg';

const Communities = () => {
  const communities = [
    {
      id: 1,
      name: 'Historic Downtown',
      founded: '1858',
      population: '2,400',
      description: 'The heart of our city, featuring beautifully preserved Victorian architecture and the original town square.',
      details: 'Historic Downtown was established as the commercial center in 1858 when the railroad first came through. The area features over 30 historic buildings, including the original courthouse, several 19th-century shops, and the historic train depot. Today, it serves as a cultural hub with museums, galleries, and local businesses that maintain the area\'s historic charm.',
      highlights: [
        'Victorian-era courthouse built in 1862',
        'Original train depot (1858)',
        'Historic Main Street shopping district',
        'Annual Heritage Festival location'
      ]
    },
    {
      id: 2,
      name: 'Riverside District',
      founded: '1875',
      population: '1,800',
      description: 'A charming riverside community known for its mills, bridges, and waterfront heritage.',
      details: 'The Riverside District grew around the original flour mill established in 1875. The Miller family built the first permanent structures here, taking advantage of the river\'s power for their operations. The community became known for its craftsmanship, particularly in woodworking and textile production.',
      highlights: [
        'Historic flour mill (1875)',
        'Original stone bridge (1882)',
        'Riverside park and walking trails',
        'Traditional craftsman homes'
      ]
    },
    {
      id: 3,
      name: 'Farmland Heights',
      founded: '1843',
      population: '950',
      description: 'Rural farming community with deep agricultural roots and stunning countryside views.',
      details: 'Farmland Heights represents the agricultural heritage of our area. Settled by German and Scandinavian immigrants in the 1840s, this community has maintained its farming traditions for over 180 years. The area is known for its family farms, many of which have been passed down through generations.',
      highlights: [
        'Century farms dating back to the 1840s',
        'Historic one-room schoolhouse',
        'Traditional barn architecture',
        'Annual harvest celebration'
      ]
    },
    {
      id: 4,
      name: 'Millbrook Village',
      founded: '1889',
      population: '1,200',
      description: 'Industrial heritage community built around the textile mills of the late 1800s.',
      details: 'Millbrook Village was purpose-built in 1889 to house workers of the Millbrook Textile Company. The community features company housing, a company store, and recreational facilities that were progressive for their time. Though the mills closed in the 1970s, the community has preserved much of its industrial heritage.',
      highlights: [
        'Original mill workers\' housing',
        'Historic company store building',
        'Mill pond and spillway',
        'Worker recreation center (now community hall)'
      ]
    },
    {
      id: 5,
      name: 'Oak Grove',
      founded: '1852',
      population: '800',
      description: 'Peaceful residential area known for its tree-lined streets and historic homes.',
      details: 'Oak Grove began as a residential area for the town\'s more prosperous citizens. The tree-lined streets and larger lots attracted merchants, professionals, and civic leaders. Many of the original oak trees still stand today, giving the neighborhood its distinctive canopy and peaceful atmosphere.',
      highlights: [
        'Tree-lined historic streets',
        'Victorian and Colonial Revival homes',
        'Original oak trees from 1850s',
        'Historic neighborhood association'
      ]
    },
    {
      id: 6,
      name: 'Pioneer Settlement',
      founded: '1834',
      population: '650',
      description: 'The oldest settlement in our area, preserving the earliest pioneer traditions and buildings.',
      details: 'Pioneer Settlement marks the very beginning of European settlement in our area. The first log cabin was built here in 1834, and the community grew slowly around farming and basic crafts. Several original log structures still stand, making this area a living museum of early pioneer life.',
      highlights: [
        'Original log cabin (1834)',
        'Pioneer cemetery',
        'Heritage craft demonstrations',
        'Living history programs'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-r from-heritage-brown/10 to-heritage-green/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">
            Our Communities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each community in our area has its own unique character, history, and
            contribution to our shared heritage. Discover the stories behind the
            neighborhoods that make our region special.
          </p>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community) => (
            <Card key={community.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">
                  {community.name}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Est. {community.founded}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{community.population}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {community.description}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif text-primary">
                        {community.name}
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        Founded in {community.founded} • Population: {community.population}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {community.details}
                      </p>
                      <h4 className="font-semibold text-primary mb-3">Historic Highlights:</h4>
                      <ul className="space-y-2">
                        {community.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Heritage Image Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8">
            Rural Heritage
          </h2>
          <div className="max-w-4xl mx-auto">
            <img
              src={heritageFarms}
              alt="Historic farmhouses representing our agricultural heritage"
              className="w-full rounded-lg shadow-lg mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our agricultural communities have been the backbone of this region for over
              180 years. These historic farmsteads represent generations of families who
              worked the land and built the foundation of our local economy and culture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Communities;