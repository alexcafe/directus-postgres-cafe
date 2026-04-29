import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
}

export function NewsCard({ title, excerpt, date }: NewsCardProps) {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="text-xs text-muted-foreground mb-2">{date}</div>
        <CardTitle className="leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm line-clamp-3">
          {excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">Leia mais</Button>
      </CardFooter>
    </Card>
  );
}
