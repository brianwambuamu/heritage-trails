import { Link } from 'react-router-dom';
import { Shield, Search, Award, Cloud, FileCheck, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Vulnerability Assessments',
      description: 'Comprehensive scanning and analysis of your systems to identify security vulnerabilities before attackers do.',
      features: ['Automated vulnerability scanning', 'Manual security testing', 'Risk prioritization', 'Remediation guidance'],
      price: 'Starting at $2,500',
      popular: false,
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Ethical hacking services that simulate real-world attacks to test your security defenses.',
      features: ['Network penetration testing', 'Web application testing', 'Social engineering tests', 'Detailed attack scenarios'],
      price: 'Starting at $5,000',
      popular: true,
    },
    {
      icon: Award,
      title: 'Compliance Certifications',
      description: 'Achieve and maintain compliance with industry standards and regulations.',
      features: ['ISO 27001 certification', 'SOC 2 Type II audits', 'PCI-DSS compliance', 'GDPR assessments'],
      price: 'Starting at $8,000',
      popular: false,
    },
    {
      icon: Cloud,
      title: 'Cloud Security Audits',
      description: 'Specialized assessments for cloud infrastructure across AWS, Azure, and Google Cloud platforms.',
      features: ['Cloud configuration review', 'Access control auditing', 'Data encryption analysis', 'Compliance verification'],
      price: 'Starting at $3,500',
      popular: false,
    },
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification',
      timeline: '3-6 months',
      industries: ['Technology', 'Finance', 'Healthcare'],
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control audit for security and availability',
      timeline: '4-8 months',
      industries: ['SaaS', 'Cloud Services', 'Technology'],
    },
    {
      name: 'PCI-DSS',
      description: 'Payment Card Industry Data Security Standard compliance',
      timeline: '2-4 months',
      industries: ['E-commerce', 'Retail', 'Finance'],
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance assessment',
      timeline: '2-3 months',
      industries: ['All industries handling EU data'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-cyber text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Security Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              From vulnerability assessments to compliance certifications, 
              we provide the cybersecurity expertise your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`relative ${service.popular ? 'border-security-orange border-2' : 'border-2 hover:border-primary transition-colors'}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-security-orange text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="text-security-green font-semibold">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-security-green" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-20 bg-security-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We help you achieve and maintain compliance with industry standards and regulations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                    <Badge variant="outline">{cert.timeline}</Badge>
                  </div>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Common Industries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.industries.map((industry, industryIndex) => (
                        <Badge key={industryIndex} variant="secondary" className="text-xs">
                          {industry}
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

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Initial security evaluation and scoping' },
              { step: '02', title: 'Testing', description: 'Comprehensive security testing and analysis' },
              { step: '03', title: 'Reporting', description: 'Detailed findings and recommendations' },
              { step: '04', title: 'Remediation', description: 'Ongoing support and re-testing' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/how-it-works">Learn More About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-security-gray">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Users className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Every organization has unique security requirements. Our team can design 
            a custom audit and certification program tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Discuss Custom Requirements</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-cyber text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and custom quote
          </p>
          <Button 
            size="lg" 
            className="bg-security-orange hover:bg-security-orange/90 text-white"
            asChild
          >
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;