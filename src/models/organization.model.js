export class Organization {
    constructor(id, name, acronym, profileImage, metaPage, homeProject, updateDate, type, territory) {
        this.id = id;
        this.name = name;
        this.acronym = acronym;
        this.profileImage = profileImage;
        this.metaPage = metaPage;
        this.homeProject = homeProject;
        this.updateDate = updateDate;
        this.type = type;
        this.territory = territory;
    }

    static fromJSON(json) {
        return new Organization(
            json.id,
            json.display_name,
            json.acronym,
            json.profile_image,
            json.meta_page,
            json.home_project,
            json.update_date,
            json.type,
            json.territory
        );
    }
}