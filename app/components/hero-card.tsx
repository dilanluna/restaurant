import Card from './card';
import type { CardProps } from './card';

type HeroCardProps = Omit<CardProps, 'flex' | 'maxW'>;

export default function HeroCard({ children, ...props }: HeroCardProps) {
  return (
    <Card
      py="16"
      px="32"
      {...props}
      flex="1"
      maxW="700px"
      textAlign="center">
      {children}
    </Card>
  );
}
