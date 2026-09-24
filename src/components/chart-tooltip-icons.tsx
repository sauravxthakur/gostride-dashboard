"use client"

import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Bar, BarChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
  { date: "2024-07-15", inflow: 4500, outflow: 3000 },
  { date: "2024-07-16", inflow: 3800, outflow: 4200 },
  { date: "2024-07-17", inflow: 5200, outflow: 1200 },
  { date: "2024-07-18", inflow: 1400, outflow: 5500 },
  { date: "2024-07-19", inflow: 6000, outflow: 3500 },
  { date: "2024-07-20", inflow: 4800, outflow: 4000 },
]

const chartConfig = {
  inflow: {
    label: "Cash In",
    color: "var(--chart-1)",
    icon: ArrowUpRight,
  },
  outflow: {
    label: "Cash Out",
    color: "var(--chart-2)",
    icon: ArrowDownRight,
  },
} satisfies ChartConfig

export function ChartTooltipIcons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Cash Flow</CardTitle>
        <CardDescription>Trailing 7 days tracking</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                })
              }}
            />
            <Bar
              dataKey="inflow"
              stackId="a"
              fill="var(--color-inflow)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="outflow"
              stackId="a"
              fill="var(--color-outflow)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
