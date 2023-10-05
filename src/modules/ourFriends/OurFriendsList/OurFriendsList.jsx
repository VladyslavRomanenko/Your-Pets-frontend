import { useSelector } from "react-redux";
import { OurFriendsCard } from "../OurFriendsCard/OurFriendsCard";
import { StyledList } from "./OurFriendsList.styled";
import { selectFriends } from "../../../redux/global/globalSelectors";

export const OurFriendsList = () => {
  const friends = useSelector(selectFriends);

  return (
    <StyledList>
      {friends?.data.map((res, id) => {
        return <OurFriendsCard key={id} {...res} />;
      })}
    </StyledList>
  );
};
