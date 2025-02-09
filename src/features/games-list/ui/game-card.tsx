import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import React from "react";

export function GameCard({ login, rating }: { login: string; rating: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Игра с {login}</CardTitle>
      </CardHeader>
      <CardContent>Rating: {rating}</CardContent>
    </Card>
  );
}
