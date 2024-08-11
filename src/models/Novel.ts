export interface INovel {
	type_n_id: number;				// TypeNId             *int     `json:"type_n_id,omitempty"`
	realise_format_id: number;		// RealiseFormatId     *int     `json:"realise_format_id,omitempty"`
	release_year_id: number;		// ReleaseYearId       *int     `json:"release_year_id,omitempty"`
	title_status_id: number;		// TitleStatusId       *int     `json:"title_status_id,omitempty"`
	transfer_status_id: number;		// TransferStatusId    *int     `json:"transfer_status_id,omitempty"`
	ru_name: string;				// RuName              *string  `json:"ru_name,omitempty"`
	en_name: string;				// EnName              *string  `json:"en_name,omitempty"`
	alter_name: string;				// AlterName           *string  `json:"alter_name,omitempty"`
	dir_name: string;				// DirName             *string  `json:"dir_name,omitempty"`
	age_rating: string;				// AgeRating           *string  `json:"age_rating,omitempty"`
	loaded_chapters_count: number;	// LoadedChaptersCount *int     `json:"loaded_chapters_count,omitempty"`
	tags: string[];					// Tags                []string `json:"tags,omitempty"`
	description: string;			// Description         *string  `json:"description,omitempty"`
	transfers: number[];			// Transfers           []int    `json:"transfers,omitempty"`
}
