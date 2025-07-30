import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  FileText, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Award,
  Calendar,
  Users,
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Initial Consultation',
      description: 'We discuss your security needs, compliance requirements, and business objectives.',
      details: [
        'Free 30-minute consultation call',
        'Requirements gathering and scoping',
        'Custom proposal development',
        'Timeline and pricing discussion'
      ],
      timeline: 'Day 1'
    },
    {
      icon: Calendar,
      title: 'Onboarding & Planning',
      description: 'Our team prepares for the audit and coordinates with your stakeholders.',
      details: [
        'Kickoff meeting with your team',
        'Documentation review and collection',
        'Access setup and permissions',
        'Detailed project timeline creation'
      ],
      timeline: 'Days 2-3'
    },
    {
      icon: Search,
      title: 'Security Evaluation',
      description: 'Comprehensive testing and assessment of your security posture.',
      details: [
        'Vulnerability scanning and analysis',
        'Manual security testing',
        'Policy and procedure review',
        'Interview with key personnel'
      ],
      timeline: 'Days 4-10'
    },
    {
      icon: ClipboardCheck,
      title: 'Analysis & Documentation',
      description: 'Our experts analyze findings and prepare comprehensive documentation.',
      details: [
        'Risk assessment and prioritization',
        'Gap analysis against standards',
        'Evidence collection and documentation',
        'Remediation recommendations'
      ],
      timeline: 'Days 11-14'
    },
    {
      icon: FileText,
      title: 'Detailed Reporting',
      description: 'Receive a comprehensive report with findings and actionable recommendations.',
      details: [
        'Executive summary for leadership',
        'Technical findings and evidence',
        'Risk ratings and impact analysis',
        'Step-by-step remediation guide'
      ],
      timeline: 'Day 15'
    },
    {
      icon: AlertTriangle,
      title: 'Remediation Support',
      description: 'We help you address identified issues and improve your security posture.',
      details: [
        'Remediation planning assistance',
        'Implementation guidance',
        'Best practices recommendations',
        'Follow-up consultations'
      ],
      timeline: 'Ongoing'
    },
    {
      icon: CheckCircle,
      title: 'Re-testing & Validation',
      description: 'Verification that remediation efforts have effectively addressed security issues.',
      details: [
        'Re-testing of previously identified issues',
        'Validation of security improvements',
        'Updated risk assessments',
        'Progress tracking and documentation'
      ],
      timeline: 'As needed'
    },
    {
      icon: Award,
      title: 'Certification & Maintenance',
      description: 'Achieve certification and maintain compliance with ongoing support.',
      details: [
        'Certification documentation preparation',
        'Compliance status verification',
        'Annual maintenance planning',
        'Continuous monitoring setup'
      ],
      timeline: 'Ongoing'
    }
  ];

  const auditTypes = [
    {
      title: 'Vulnerability Assessment',
      duration: '5-7 days',
      description: 'Comprehensive scan and analysis of your systems'
    },
    {
      title: 'Penetration Testing',
      duration: '10-14 days',
      description: 'Simulated attacks to test your defenses'
    },
    {
      title: 'Compliance Audit',
      duration: '15-30 days',
      description: 'Full compliance assessment and certification'
    },
    {
      title: 'Cloud Security Audit',
      duration: '7-10 days',
      description: 'Specialized cloud infrastructure assessment'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-cyber text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              How Our Security Audits Work
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Our proven 8-step process ensures comprehensive security assessments 
              and successful compliance certifications.
            </p>
            <Button 
              size="lg" 
              className="bg-security-orange hover:bg-security-orange/90 text-white"
              asChild
            >
              <Link to="/contact">Start Your Audit Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                          <step.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                          <div className="text-security-orange font-semibold">{step.timeline}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-security-green flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2 text-center">
                  <div className="bg-security-gray rounded-lg p-8">
                    <div className="text-6xl font-bold text-primary mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Types & Timeline */}
      <section className="py-20 bg-security-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Typical Audit Timelines</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Timeline varies based on scope, complexity, and your organization's size
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditTypes.map((audit, index) => (
              <Card key={index} className="bg-white text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{audit.title}</CardTitle>
                  <div className="text-2xl font-bold text-security-green">{audit.duration}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{audit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What You'll Receive</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-security-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Report</h3>
                    <p className="text-muted-foreground">Detailed findings with risk ratings, evidence, and remediation recommendations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-6 w-6 text-security-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Executive Briefing</h3>
                    <p className="text-muted-foreground">High-level summary for leadership with business impact analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ClipboardCheck className="h-6 w-6 text-security-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Remediation Roadmap</h3>
                    <p className="text-muted-foreground">Step-by-step guide to address identified security issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-security-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Certification Support</h3>
                    <p className="text-muted-foreground">Documentation and guidance for achieving compliance certifications</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Begin?</h3>
              <div className="space-y-4 mb-6">
                <div className="bg-security-gray p-4 rounded">
                  <h4 className="font-semibold mb-2">Free Consultation</h4>
                  <p className="text-sm text-muted-foreground">Discuss your needs and get a custom proposal</p>
                </div>
                <div className="bg-security-gray p-4 rounded">
                  <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground">We work around your business operations</p>
                </div>
                <div className="bg-security-gray p-4 rounded">
                  <h4 className="font-semibold mb-2">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">Continued guidance throughout the process</p>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-cyber text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Questions About Our Process?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our team is here to help you understand exactly what to expect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-security-orange hover:bg-security-orange/90 text-white"
              asChild
            >
              <Link to="/contact">Ask Questions</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;