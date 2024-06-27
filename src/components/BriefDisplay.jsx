import { Card, CardHeader, CardBody } from "@nextui-org/card";

export function BriefDisplay() {
    return (
      <Card
        className="border-none bg-background/40 dark:bg-default-100/50 max-w-[520px]"
        shadow="sm"
        isBlurred={true}
        radius="lg"
      >
        <CardHeader>
          <h1>Brief Overview</h1>
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    );
}