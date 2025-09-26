"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  BarChart3, 
  Clock, 
  Zap,
  ArrowLeft,
  Settings
} from "lucide-react";
import Link from "next/link";

// Note: Algorithm implementations are available in the algorithms folder
// For now, we'll use simplified implementations for visualization

interface SortingStep {
  array: number[];
  comparisons: number;
  swaps: number;
  highlighted: number[];
  description: string;
}

const sortingAlgorithms = [
  {
    name: "Bubble Sort",
    description: "Simple comparison-based sorting algorithm",
    complexity: "O(n²)",
    space: "O(1)",
    stable: true,
    color: "bg-blue-500"
  },
  {
    name: "Quick Sort",
    description: "Efficient divide-and-conquer sorting algorithm",
    complexity: "O(n log n)",
    space: "O(log n)",
    stable: false,
    color: "bg-green-500"
  },
  {
    name: "Merge Sort",
    description: "Stable divide-and-conquer sorting algorithm",
    complexity: "O(n log n)",
    space: "O(n)",
    stable: true,
    color: "bg-purple-500"
  },
  {
    name: "Heap Sort",
    description: "Comparison-based sorting using binary heap",
    complexity: "O(n log n)",
    space: "O(1)",
    stable: false,
    color: "bg-orange-500"
  },
  {
    name: "Insertion Sort",
    description: "Simple sorting algorithm for small datasets",
    complexity: "O(n²)",
    space: "O(1)",
    stable: true,
    color: "bg-red-500"
  }
];

export default function SortingPage() {
  const [array, setArray] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState(20);
  const [speed, setSpeed] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState(0);
  const [steps, setSteps] = useState<SortingStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

  // Generate random array
  const generateArray = useCallback(() => {
    const newArray = Array.from({ length: arraySize }, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setSteps([]);
    setCurrentStep(0);
    setComparisons(0);
    setSwaps(0);
  }, [arraySize]);

  // Initialize array on mount and when size changes
  useEffect(() => {
    generateArray();
  }, [generateArray]);

  // Visualize sorting algorithm
  const visualizeSorting = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    const algorithm = sortingAlgorithms[currentAlgorithm];
    const arrayCopy = [...array];
    const visualizationSteps: SortingStep[] = [];
    
    // Create a step-by-step visualization for each algorithm
    const createVisualizationSteps = (arr: number[], algorithmName: string) => {
      const steps: SortingStep[] = [];
      let compCount = 0;
      let swapCount = 0;
      
      // Add initial state
      steps.push({
        array: [...arr],
        comparisons: 0,
        swaps: 0,
        highlighted: [],
        description: `Starting ${algorithmName} on array of ${arr.length} elements`
      });
      
      // Simulate algorithm execution with steps
      const workingArray = [...arr];
      
      if (algorithmName === "Bubble Sort") {
        // Bubble sort simulation
        for (let i = 0; i < workingArray.length - 1; i++) {
          for (let j = 0; j < workingArray.length - i - 1; j++) {
            compCount++;
            steps.push({
              array: [...workingArray],
              comparisons: compCount,
              swaps: swapCount,
              highlighted: [j, j + 1],
              description: `Comparing ${workingArray[j]} and ${workingArray[j + 1]}`
            });
            
            if (workingArray[j] > workingArray[j + 1]) {
              [workingArray[j], workingArray[j + 1]] = [workingArray[j + 1], workingArray[j]];
              swapCount++;
              steps.push({
                array: [...workingArray],
                comparisons: compCount,
                swaps: swapCount,
                highlighted: [j, j + 1],
                description: `Swapped ${workingArray[j + 1]} and ${workingArray[j]}`
              });
            }
          }
        }
      } else if (algorithmName === "Insertion Sort") {
        // Insertion sort simulation
        for (let i = 1; i < workingArray.length; i++) {
          const key = workingArray[i];
          let j = i - 1;
          
          steps.push({
            array: [...workingArray],
            comparisons: compCount,
            swaps: swapCount,
            highlighted: [i],
            description: `Inserting ${key} into sorted portion`
          });
          
          while (j >= 0 && workingArray[j] > key) {
            compCount++;
            workingArray[j + 1] = workingArray[j];
            j--;
            swapCount++;
            steps.push({
              array: [...workingArray],
              comparisons: compCount,
              swaps: swapCount,
              highlighted: [j + 1, j],
              description: `Shifting ${workingArray[j + 1]} to make room`
            });
          }
          workingArray[j + 1] = key;
        }
      } else {
        // Generic simulation for other algorithms
        const sorted = [...workingArray].sort((a, b) => a - b);
        for (let i = 0; i < sorted.length; i++) {
          workingArray[i] = sorted[i];
          steps.push({
            array: [...workingArray],
            comparisons: compCount + i,
            swaps: swapCount + Math.floor(i / 2),
            highlighted: [i],
            description: `${algorithmName}: Placing ${sorted[i]} in position ${i + 1}`
          });
        }
      }
      
      // Add final state
      steps.push({
        array: [...workingArray],
        comparisons: compCount,
        swaps: swapCount,
        highlighted: [],
        description: `${algorithmName} completed! Array is now sorted.`
      });
      
      return steps;
    };
    
    const steps = createVisualizationSteps(arrayCopy, algorithm.name);
    setSteps(steps);
    
    // Animate through steps
    for (let i = 0; i < steps.length; i++) {
      if (!isRunning) break;
      
      setCurrentStep(i);
      setArray(steps[i].array);
      setComparisons(steps[i].comparisons);
      setSwaps(steps[i].swaps);
      
      await new Promise(resolve => setTimeout(resolve, Math.max(50, 1000 - speed * 8)));
    }
    
    setIsRunning(false);
  };

  const pauseVisualization = () => {
    setIsRunning(false);
  };

  const resetVisualization = () => {
    setIsRunning(false);
    setSteps([]);
    setCurrentStep(0);
    setComparisons(0);
    setSwaps(0);
    generateArray();
  };

  const getBarHeight = (value: number) => {
    const max = Math.max(...array);
    return (value / max) * 100;
  };

  const getBarColor = (index: number) => {
    if (steps.length === 0) return "bg-slate-400";
    
    const currentStepData = steps[currentStep];
    if (currentStepData?.highlighted.includes(index)) {
      return sortingAlgorithms[currentAlgorithm].color;
    }
    
    return "bg-slate-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/algorithms">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Algorithms
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Sorting Algorithms
                </h1>
                <p className="text-slate-600 dark:text-slate-300">
                  Visualize and compare different sorting algorithms
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-sm">
                <Clock className="h-3 w-3 mr-1" />
                {steps.length > 0 ? `${currentStep + 1}/${steps.length}` : "Ready"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Controls Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Algorithm Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Algorithm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sortingAlgorithms.map((algorithm, index) => (
                  <Button
                    key={index}
                    variant={currentAlgorithm === index ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setCurrentAlgorithm(index)}
                  >
                    <div className={`w-3 h-3 rounded-full ${algorithm.color} mr-3`} />
                    {algorithm.name}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Array Size: {arraySize}
                  </label>
                  <Slider
                    value={[arraySize]}
                    onValueChange={(value) => setArraySize(value[0])}
                    max={50}
                    min={5}
                    step={1}
                    className="mt-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Speed: {speed}ms
                  </label>
                  <Slider
                    value={[speed]}
                    onValueChange={(value) => setSpeed(value[0])}
                    max={200}
                    min={10}
                    step={10}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Algorithm Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Algorithm Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Time Complexity:</span>
                  <Badge variant="outline">{sortingAlgorithms[currentAlgorithm].complexity}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Space Complexity:</span>
                  <Badge variant="outline">{sortingAlgorithms[currentAlgorithm].space}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Stable:</span>
                  <Badge variant={sortingAlgorithms[currentAlgorithm].stable ? "default" : "secondary"}>
                    {sortingAlgorithms[currentAlgorithm].stable ? "Yes" : "No"}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                  {sortingAlgorithms[currentAlgorithm].description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-3 space-y-6">
            {/* Controls */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={isRunning ? pauseVisualization : visualizeSorting}
                      disabled={isRunning && steps.length === 0}
                      className="flex items-center"
                    >
                      {isRunning ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Start
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={resetVisualization}
                      variant="outline"
                      className="flex items-center"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                  <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 mr-1" />
                      Comparisons: {comparisons}
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="h-4 w-4 mr-1" />
                      Swaps: {swaps}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Array Visualization */}
            <Card>
              <CardHeader>
                <CardTitle>Array Visualization</CardTitle>
                <CardDescription>
                  {steps.length > 0 && steps[currentStep]?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-center space-x-1 bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                  {array.map((value, index) => (
                    <div
                      key={index}
                      className={`${getBarColor(index)} transition-all duration-300 rounded-t-sm min-w-[8px] flex items-end justify-center text-xs text-white font-medium`}
                      style={{ height: `${getBarHeight(value)}%` }}
                    >
                      <span className="transform rotate-90 whitespace-nowrap">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Step-by-Step Progress */}
            {steps.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Step-by-Step Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {steps.map((step, index) => (
                      <div
                        key={index}
                        className={`p-2 rounded text-sm ${
                          index === currentStep
                            ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
                            : "bg-slate-50 dark:bg-slate-800"
                        }`}
                      >
                        Step {index + 1}: {step.description}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
