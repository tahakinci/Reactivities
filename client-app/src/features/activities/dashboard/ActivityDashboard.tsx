import { Grid } from "semantic-ui-react";
import { ActivityList } from "./ActivityList";

import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { LoadingComponents } from "../../../app/layout/LoadingComponents";
import { useEffect } from "react";

export const ActivityDashboard = observer(() => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;
  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities]);

  if (activityStore.loading) return <LoadingComponents content="Loading app" />;

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity Filters</h2>
      </Grid.Column>
    </Grid>
  );
});
