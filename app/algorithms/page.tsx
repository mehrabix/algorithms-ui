import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Search, 
  GitBranch, 
  Brain, 
  Target, 
  Layers,
  ArrowRight,
  Play,
  Code,
  BookOpen
} from "lucide-react";
import Link from "next/link";

export default function AlgorithmsPage() {
  const algorithmCategories = [
    {
      name: "Sorting Algorithms",
      description: "Visualize bubble sort, quick sort, merge sort and more",
      icon: BarChart3,
      count: "15+ algorithms",
      color: "bg-blue-500",
      href: "/algorithms/sorting",
      algorithms: ["Bubble Sort", "Quick Sort", "Merge Sort", "Heap Sort", "Insertion Sort"]
    },
    {
      name: "Search Algorithms",
      description: "Binary search, linear search, and advanced search techniques",
      icon: Search,
      count: "8+ algorithms",
      color: "bg-green-500",
      href: "/algorithms/search",
      algorithms: ["Binary Search", "Linear Search", "Jump Search", "Interpolation Search"]
    },
    {
      name: "Graph Algorithms",
      description: "BFS, DFS, Dijkstra's algorithm, and pathfinding",
      icon: GitBranch,
      count: "12+ algorithms",
      color: "bg-purple-500",
      href: "/algorithms/graphs",
      algorithms: ["BFS", "DFS", "Dijkstra", "A*", "Kruskal MST"]
    },
    {
      name: "Dynamic Programming",
      description: "Knapsack, Fibonacci, and optimization problems",
      icon: Brain,
      count: "20+ algorithms",
      color: "bg-orange-500",
      href: "/algorithms/dynamic-programming",
      algorithms: ["Fibonacci", "Knapsack", "LCS", "Edit Distance", "Coin Change"]
    },
    {
      name: "Backtracking",
      description: "N-Queens, Sudoku solver, and constraint satisfaction",
      icon: Target,
      count: "10+ algorithms",
      color: "bg-red-500",
      href: "/algorithms/backtracking",
      algorithms: ["N-Queens", "Sudoku", "Maze Solver", "Knight Tour"]
    },
    {
      name: "Data Structures",
      description: "Trees, heaps, stacks, queues, and linked lists",
      icon: Layers,
      count: "25+ structures",
      color: "bg-indigo-500",
      href: "/algorithms/data-structures",
      algorithms: ["Binary Tree", "Heap", "Stack", "Queue", "Linked List"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Interactive Algorithm Visualizations
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore, visualize, and understand algorithms through interactive demonstrations. 
              Learn with step-by-step visualizations and real-time code execution.
            </p>
          </div>
        </div>
      </div>

      {/* Algorithm Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {algorithmCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-xl ${category.color} text-white shadow-lg`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Featured Algorithms:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {category.algorithms.map((algorithm, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {algorithm}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link href={category.href}>
                    <Button className="w-full group-hover:bg-slate-900 dark:group-hover:bg-slate-100 group-hover:text-white dark:group-hover:text-slate-900 transition-all duration-300">
                      <Play className="h-4 w-4 mr-2" />
                      Explore {category.name}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-900 dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interactive Learning Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Learn algorithms with modern interactive tools and comprehensive resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Step-by-Step Visualization
              </h3>
              <p className="text-slate-300">
                Watch algorithms execute step by step with real-time animations and highlighting
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Live Code Execution
              </h3>
              <p className="text-slate-300">
                See the actual code running with syntax highlighting and execution flow
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Educational Content
              </h3>
              <p className="text-slate-300">
                Detailed explanations, complexity analysis, and learning resources
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
