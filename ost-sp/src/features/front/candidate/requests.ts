import { API_URL } from "../../../data/Api";
import axios from "axios";
import IProfileCredentials from "../../../data/ProfileCredential";
import MoreInfo from "src/data/MoreInfo";
import YoutubeStep from "src/data/VideoStep";
import ITeamCredentials from "src/data/TeamCredential";

export const updateOne = (
  profile: IProfileCredentials | MoreInfo | ITeamCredentials,
  id: number
) => axios.patch(`${API_URL}/candidates/${id}`, profile).then(res => res.data);

export const submitVideoReq = (youtubeLink: YoutubeStep) =>
  axios.post(`${API_URL}//answers/submitYoutubeVideo`, {
    youtubeLink: youtubeLink.youtube
  });
