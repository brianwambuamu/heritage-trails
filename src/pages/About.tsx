import { Link } from 'react-router-dom';
import { Shield, Users, Award, Target, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Security Officer',
      credentials: ['CISSP', 'CISM', 'CEH'],
      experience: '15+ years',
      specialty: 'Enterprise Security Architecture',
      image: '/placeholder-person.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Penetration Tester',
      credentials: ['OSCP', 'GPEN', 'CRT'],
      experience: '12+ years',
      specialty: 'Red Team Operations',
      image: '/placeholder-person.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Compliance Director',
      credentials: ['CISA', 'CRISC', 'PhD'],
      experience: '18+ years',
      specialty: 'Regulatory Compliance',
      image: '/placeholder-person.jpg'
    },
    {
      name: 'David Kim',
      role: 'Cloud Security Specialist',
      credentials: ['CCSP', 'AWS Security', 'Azure Security'],
      experience: '10+ years',
      specialty: 'Cloud Infrastructure Security',
      image: '/placeholder-person.jpg'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the highest security standards in everything we do, from our own operations to client assessments.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work as an extension of your team, providing ongoing support and guidance beyond the audit process.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality and continuous improvement ensures the best possible outcomes for our clients.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering actionable insights that help organizations improve their security posture effectively.'
    }
  ];

  const certifications = [
    'CISSP', 'CISM', 'CISA', 'CEH', 'OSCP', 'GPEN', 'CCSP', 'CRISC'
  ];

  const stats = [
    { number: '500+', label: 'Successful Audits' },
    { number: '99.8%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Combined Experience' },
    { number: '50+', label: 'Certifications Held' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-cyber text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              About SecureAudit
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Leading cybersecurity experts helping organizations achieve 
              robust security postures and regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8">
                To empower organizations with comprehensive cybersecurity assessments 
                and compliance expertise, enabling them to protect their digital assets 
                and maintain customer trust in an evolving threat landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-security-green" />
                  <span>Comprehensive security assessments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-security-green" />
                  <span>Expert compliance guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-security-green" />
                  <span>Actionable security recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-security-green" />
                  <span>Ongoing partnership and support</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-security-gray rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-security-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach to cybersecurity and client relationships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white text-center">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certified security professionals with decades of combined experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-security-gray rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-security-green font-semibold">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Specialty</h4>
                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.credentials.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Credentials */}
      <section className="py-20 bg-security-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Experience & Credentials</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team holds industry-leading certifications and has worked with 
                organizations across various sectors including healthcare, finance, 
                technology, and government.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Industries Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Healthcare', 'Financial Services', 'Technology', 'Government', 'Retail', 'Manufacturing'].map((industry, index) => (
                      <Badge key={index} variant="outline">{industry}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Company Sizes</h3>
                  <p className="text-muted-foreground">From startups to Fortune 500 enterprises</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-muted-foreground">Serving clients across North America, Europe, and Asia-Pacific</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Team Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="text-center p-4 bg-security-gray rounded">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{cert}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              Founded with a mission to make cybersecurity accessible and actionable
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-8 items-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                2018
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                <p className="text-muted-foreground">SecureAudit was established by a team of former enterprise security leaders with a vision to provide accessible, high-quality cybersecurity assessments.</p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                2020
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">100th Client Milestone</h3>
                <p className="text-muted-foreground">Reached our first major milestone by successfully completing security audits for over 100 organizations across various industries.</p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                2022
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cloud Security Expansion</h3>
                <p className="text-muted-foreground">Expanded our services to include specialized cloud security audits for AWS, Azure, and Google Cloud platforms.</p>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                2024
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
                <p className="text-muted-foreground">Recognized as a leading cybersecurity consulting firm with over 500 successful audits and industry-leading client satisfaction scores.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-cyber text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Work With Our Expert Team</h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to strengthen your security posture with proven expertise?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-security-orange hover:bg-security-orange/90 text-white"
              asChild
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;