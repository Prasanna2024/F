import { Text, Progress, Card } from '@mantine/core';
import classes from './ProgressCardColored.module.css';
import { useStore } from '../../store/store';

export function ProgressCardColored() {
  const {bittingAmount} = useStore()
  return (
    <Card withBorder radius="md" p="xs" className={classes.card}>
      <Text fz="xs" tt="uppercase" fw={700} className={classes.title}>
        Monthly goal
      </Text>
      <Text fz="lg" fw={500} className={classes.stats}>
      {bittingAmount}
      </Text>
      <Progress
        value={(bittingAmount)/100}
        mt="md"
        size="lg"
        radius="xl"
        classNames={{
          root: classes.progressTrack,
          section: classes.progressSection,
        }}
      />
    </Card>
  );
}