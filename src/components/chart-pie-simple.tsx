"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A simple pie chart"

const chartData = [
  { stream: "services", amount: 27500, fill: "var(--color-services)" },
  { stream: "retail", amount: 20000, fill: "var(--color-retail)" },
  { stream: "consulting", amount: 18700, fill: "var(--color-consulting)" },
  { stream: "retainer", amount: 17300, fill: "var(--color-retainer)" },
  { stream: "other", amount: 9000, fill: "var(--color-other)" },
]

const chartConfig = {
  amount: {
    label: "Revenue",
  },
  services: {
    label: "Services",
    color: "var(--chart-1)",
  },
  retail: {
    label: "Retail",
    color: "var(--chart-2)",
  },
  consulting: {
    label: "Consulting",
    color: "var(--chart-3)",
  },
  retainer: {
    label: "Retainer",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieSimple() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue Breakdown</CardTitle>
        <CardDescription>Q3 2026 Segments</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="amount" nameKey="stream" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Services lead with 30% share <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing major income streams
        </div>
      </CardFooter>
    </Card>
  )
}
