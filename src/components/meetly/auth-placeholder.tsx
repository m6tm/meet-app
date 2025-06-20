import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, Users } from "lucide-react"; // Using Lock for general security

const AuthPlaceholder = () => {
  // Placeholder for social icons, can be replaced with actual icons later
  const GithubIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
  const GoogleIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-5.113 2.4-4.333 0-7.8-3.533-7.8-7.933s3.467-7.933 7.8-7.933c2.6 0 4.507 1.027 5.907 2.347l2.04-2.04C18.963 3.533 16.267 2.4 13.487 2.4 6.68 2.4 1.533 7.547 1.533 14.347s5.147 11.947 11.954 11.947c3.027 0 5.76-1.027 7.607-2.867 1.987-1.987 2.92-4.72 2.92-8.04v-2.4H12.48z"/></svg>;


  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <Lock className="h-8 w-8 text-primary" />
          <CardTitle className="text-2xl">Secure Access</CardTitle>
        </div>
        <CardDescription>Robust authentication and security features.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Sign in using your preferred provider. 2FA via Supabase and Google Authenticator ensures your account is protected.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="flex-grow">
            <GoogleIcon /> <span className="ml-2">Sign in with Google</span>
          </Button>
          <Button variant="outline" className="flex-grow">
            <GithubIcon /> <span className="ml-2">Sign in with GitHub</span>
          </Button>
          {/* Add LinkedIn and Facebook placeholders similarly if desired */}
        </div>
        <div className="mt-4">
          <h4 className="font-semibold mb-2 text-foreground">Coming Soon:</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>LinkedIn & Facebook Authentication</li>
            <li>Two-Factor Authentication (2FA)</li>
            <li>Granular Role & Permission Management</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthPlaceholder;
