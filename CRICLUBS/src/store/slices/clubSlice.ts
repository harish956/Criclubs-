import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { League } from "../../interfaces/LeagueCard";

interface InitialStateProps {
  clubs: League[];
}

const initialState: InitialStateProps = {
  clubs: [],
};

const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    setClubList: (state, action: PayloadAction<League[]>) => {
      state.clubs = action.payload;
    },
  },
});

export const { setClubList } = clubSlice.actions;

export default clubSlice.reducer;
