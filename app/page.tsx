import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Code, 
  Zap, 
  Target, 
  BarChart3, 
  GitBranch, 
  Search, 
  Layers,
  Play,
  BookOpen,
  Github,
  ExternalLink
} from "lucide-react";

export default function Home() {
  const algorithmCategories = [
    {
      name: "Sorting Algorithms",
      description: "Visualize bubble sort, quick sort, merge sort and more",
      icon: BarChart3,
      count: "15+ algorithms",
      color: "bg-blue-500"
    },
    {
      name: "Search Algorithms",
      description: "Binary search, linear search, and advanced search techniques",
      icon: Search,
      count: "8+ algorithms",
      color: "bg-green-500"
    },
    {
      name: "Graph Algorithms",
      description: "BFS, DFS, Dijkstra's algorithm, and pathfinding",
      icon: GitBranch,
      count: "12+ algorithms",
      color: "bg-purple-500"
    },
    {
      name: "Dynamic Programming",
      description: "Knapsack, Fibonacci, and optimization problems",
      icon: Brain,
      count: "20+ algorithms",
      color: "bg-orange-500"
    },
    {
      name: "Backtracking",
      description: "N-Queens, Sudoku solver, and constraint satisfaction",
      icon: Target,
      count: "10+ algorithms",
      color: "bg-red-500"
    },
    {
      name: "Data Structures",
      description: "Trees, heaps, stacks, queues, and linked lists",
      icon: Layers,
      count: "25+ structures",
      color: "bg-indigo-500"
    }
  ];

  const features = [
    {
      title: "Interactive Visualizations",
      description: "Step-by-step algorithm execution with real-time animations",
      icon: Play
    },
    {
      title: "Code Examples",
      description: "Well-documented implementations in multiple programming languages",
      icon: Code
    },
    {
      title: "Performance Analysis",
      description: "Compare time and space complexity across different algorithms",
      icon: Zap
    },
    {
      title: "Educational Content",
      description: "Detailed explanations and learning resources for each algorithm",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">Algorithms UI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Interactive Algorithm Learning Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Master Algorithms with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}Visual Learning
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Explore, visualize, and understand algorithms through interactive demonstrations. 
            From sorting to graph traversal, learn with step-by-step visualizations and real-time code execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Play className="h-5 w-5 mr-2" />
              Start Learning
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <ExternalLink className="h-5 w-5 mr-2" />
              View Examples
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Algorithm Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Algorithm Categories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore our comprehensive collection of algorithms organized by category
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {algorithmCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${category.color} text-white`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {category.description}
                    </CardDescription>
                    <Button variant="ghost" className="mt-4 w-full group-hover:bg-slate-100 dark:group-hover:bg-slate-800">
                      Explore <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Algorithms UI?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Learn algorithms the modern way with interactive visualizations and comprehensive resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Master Algorithms?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of developers who are learning algorithms with visualizations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Play className="h-5 w-5 mr-2" />
              Start Learning Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900">
              <Github className="h-5 w-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-slate-900 dark:text-white">Algorithms UI</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Examples</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="text-center text-sm text-slate-500 dark:text-slate-400">
            © 2024 Algorithms UI. Built with Next.js and shadcn/ui.
          </div>
        </div>
      </footer>
    </div>
  );
}
