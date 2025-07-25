import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import historicMainStreet from '@/assets/historic-main-street.jpg';
import historicCourthouse from '@/assets/historic-courthouse.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src={historicMainStreet}
          alt="Historic Main Street"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
          <div className="text-center text-primary-foreground px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Discover Our Heritage
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Explore the rich history and vibrant communities that shaped our local heritage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/history">
                  Explore History <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/communities">
                  View Communities
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Welcome to Our Local History
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our community has a rich tapestry of stories, traditions, and landmarks that
              have shaped who we are today. From the early settlers who first called this
              place home to the vibrant neighborhoods that define our modern identity,
              every corner holds a piece of our collective memory.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us in preserving and celebrating the heritage that connects us all.
              Discover the stories behind our historic buildings, learn about the
              communities that make us unique, and help us continue this important work
              of remembrance.
            </p>
            <Button asChild>
              <Link to="/contact">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src={historicCourthouse}
              alt="Historic Courthouse"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">
            Explore Our Heritage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-accent rounded-full">
                    <Users className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  Communities
                </h3>
                <p className="text-muted-foreground mb-6">
                  Discover the unique character and stories of our local neighborhoods
                  and communities.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/communities">
                    Explore Communities
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-accent rounded-full">
                    <Clock className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  Historical Timeline
                </h3>
                <p className="text-muted-foreground mb-6">
                  Journey through time and explore the key events that shaped our
                  local history.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/history">
                    View Timeline
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-accent rounded-full">
                    <MapPin className="h-8 w-8 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-6">
                  Connect with us to share stories, ask questions, or learn how
                  you can help preserve our heritage.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;