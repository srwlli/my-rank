'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="py-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
          Category #1
        </h1>
      </div>

      {/* Voting Cards - Side by side */}
      <div className="grid grid-cols-2 gap-4 h-80 lg:h-96 mb-8">
        <Card className="hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer group">
          <CardContent className="p-4 lg:p-6 h-full flex flex-col items-center justify-center">
            <div className="text-5xl lg:text-6xl mb-4 group-hover:scale-110 transition-transform">
              🏆
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-2">
              Item 1
            </h3>
            <div className="text-xs lg:text-sm text-muted-foreground text-center">
              <div>Rating: 1200</div>
              <div>Votes: 0</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer group">
          <CardContent className="p-4 lg:p-6 h-full flex flex-col items-center justify-center">
            <div className="text-5xl lg:text-6xl mb-4 group-hover:scale-110 transition-transform">
              🏆
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-card-foreground mb-2">
              Item 2
            </h3>
            <div className="text-xs lg:text-sm text-muted-foreground text-center">
              <div>Rating: 1200</div>
              <div>Votes: 0</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-muted-foreground text-sm lg:text-base">
        Tap the item you prefer to vote
      </div>
    </div>
  );
}