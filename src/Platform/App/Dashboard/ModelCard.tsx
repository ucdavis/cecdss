import { Button } from "reactstrap";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../Shared/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface ModelCardProps {
    id: number;
    createdAt?: string;
    title: string;
    description: string;
    link?: string;
}

export default function ModelCard(props: ModelCardProps) {
  const { id, title, description, createdAt } = props;

  return (
    <Card className="transform transition-transform duration-300 hover:scale-105 p-4">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <div className="text-xs text-gray-400">
          {/* {dateString} */}
          {'6 Hours Ago'}
        </div>
        <Button
          variant="ghost"
          size="icon"
          outline
          className="text-muted-foreground hover:bg-muted"
        >
          <FontAwesomeIcon icon={faAngleRight} fontSize={'14px'} />
        </Button>
      </CardFooter>
    </Card>
  );
}
