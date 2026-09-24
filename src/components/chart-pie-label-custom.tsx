"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
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

export const description = "A pie chart with a custom label"

const chartData = [
  { bucket: "current", amount: 45000, fill: "var(--color-current)" },
  { bucket: "days30", amount: 15000, fill: "var(--color-days30)" },
  { bucket: "days60", amount: 8000, fill: "var(--color-days60)" },
  { bucket: "days90", amount: 3500, fill: "var(--color-days90)" },
  { bucket: "older", amount: 1200, fill: "var(--color-older)" },
]

const chartConfig = {
  amount: {
    label: "AED",
  },
  current: {
    label: "Current",
    color: "var(--chart-1)",
  },
  days30: {
    label: "1-30 Days",
    color: "var(--chart-2)",
  },
  days60: {
    label: "31-60 Days",
    color: "var(--chart-3)",
  },
  days90: {
    label: "61-90 Days",
    color: "var(--chart-4)",
  },
  older: {
    label: "90+ Days",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartPieLabelCustom() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Accounts Receivable Aging</CardTitle>
        <CardDescription>Outstanding Invoices</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] px-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="amount" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="var(--foreground)"
                  >
                    {payload.amount > 5000 ? `${(payload.amount/1000).toFixed(0)}k` : ''}
                  </text>
                )
              }}
              nameKey="bucket"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          DSO decreased by 4 days <TrendingDown className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Total outstanding: AED 72,700
        </div>
      </CardFooter>
    </Card>
  )
}
