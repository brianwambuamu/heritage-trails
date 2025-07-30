import { useState } from 'react';
import { Shield, Eye, EyeOff, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login
    toast({
      title: "Login Successful",
      description: "Welcome to your SecureAudit client portal.",
    });
  };

  const features = [
    'Access audit reports and certifications',
    'Track ongoing security assessments',
    'Download compliance documentation',
    'Schedule follow-up consultations',
    'Receive real-time security alerts',
    'Manage remediation tasks'
  ];

  return (
    <div className="min-h-screen bg-security-gray flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Login Form */}
          <div className="max-w-md mx-auto w-full">
            <Card className="bg-white shadow-xl">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Client Portal Login</CardTitle>
                <p className="text-muted-foreground">
                  Access your security reports and audit documentation
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className="pl-10"
                      />
                      <User className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                      />
                      <Lock className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? 
                          <EyeOff className="h-4 w-4 text-muted-foreground" /> : 
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        }
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked) => handleInputChange('rememberMe', checked as boolean)}
                      />
                      <label htmlFor="remember" className="text-sm text-muted-foreground">
                        Remember me
                      </label>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Sign In to Portal
                  </Button>

                  <div className="text-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      Need access to the client portal?{' '}
                      <span className="text-primary hover:underline cursor-pointer">
                        Contact support
                      </span>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-blue-800">Secure Portal</h4>
                  <p className="text-sm text-blue-700">
                    Your data is protected with enterprise-grade encryption and 
                    multi-factor authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portal Features */}
          <div>
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">
                Your Security Command Center
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Access all your security reports, audit documentation, and 
                compliance certificates in one secure location.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Portal Features:</h3>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-security-orange rounded-full flex-shrink-0" />
                    <span className="opacity-90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm opacity-90 mb-3">
                  Our support team is available 24/7 to assist with portal access.
                </p>
                <div className="text-sm">
                  <div>📧 support@secureaudit.com</div>
                  <div>📞 +1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;