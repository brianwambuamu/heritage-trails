import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen py-16">
      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-r from-heritage-brown/10 to-heritage-green/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions about our local history,
            want to share stories, or would like to get involved in preservation efforts,
            we're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our local history center is staffed by volunteers passionate about
                preserving and sharing the stories of our community. We welcome
                visitors, researchers, and anyone interested in local heritage.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-full">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Visit Us</h3>
                      <p className="text-muted-foreground">
                        Local History Heritage Center<br />
                        123 Heritage Lane<br />
                        Historic District, State 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-heritage-green rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Call Us</h3>
                      <p className="text-muted-foreground">
                        (555) 123-4567<br />
                        Toll-free: (800) 123-4567
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent rounded-full">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@localheritage.org<br />
                        research@localheritage.org
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-heritage-beige rounded-full">
                      <Clock className="h-6 w-6 text-heritage-brown" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Hours</h3>
                      <p className="text-muted-foreground">
                        Tuesday - Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: 1:00 PM - 4:00 PM<br />
                        Closed Mondays
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your inquiry, story to share, or how you'd like to get involved..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">
                  How You Can Help
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-primary">Share Your Stories:</strong> Do you have family
                    photos, documents, or memories related to our local history?
                  </p>
                  <p>
                    <strong className="text-primary">Volunteer:</strong> Join our team of volunteers
                    who help with research, events, and preservation efforts.
                  </p>
                  <p>
                    <strong className="text-primary">Donate:</strong> Support our mission to preserve
                    local history for future generations.
                  </p>
                  <p>
                    <strong className="text-primary">Research Assistance:</strong> Our archives are
                    available for genealogy and historical research by appointment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-center text-primary mb-8">
            Find Us
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-heritage-beige rounded-lg flex items-center justify-center">
                <div className="text-center text-heritage-brown">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm opacity-75">
                    123 Heritage Lane, Historic District
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;