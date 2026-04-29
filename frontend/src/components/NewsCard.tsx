import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category?: string;
}

export function NewsCard({ title, excerpt, date, category }: NewsCardProps) {
  return (
    <Card className="w-full flex flex-col hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">{date}</span>
          {category && (
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          )}
        </div>
        <CardTitle className="leading-tight text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-sm line-clamp-3 leading-relaxed">
          {excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary">
          Leia mais →
        </Button>
      </CardFooter>
    </Card>
  );
}
