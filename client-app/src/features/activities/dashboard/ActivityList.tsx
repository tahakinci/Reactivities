import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { ActivityListItem } from "./ActivityListItem";

export const ActivityList = observer(() => {
  const { activityStore } = useStore();
  const { activitiesByDate } = activityStore;

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <ActivityListItem activity={activity} key={activity.id} />
        ))}
      </Item.Group>
    </Segment>
  );
});
