import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Welcome to Our Web Application</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">This is a modern web application built with React and Tailwind CSS.</p>
          </CardContent>
        </Card>

        <Alert className="mb-6">
          <AlertDescription>
            Get started by editing the components in the src directory.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modern React Components</li>
                <li>Tailwind CSS Styling</li>
                <li>Responsive Design</li>
                <li>Clean Architecture</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Explore the codebase and start customizing the components according to your needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;