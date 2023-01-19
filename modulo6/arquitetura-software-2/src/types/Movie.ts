export class Movie {
    constructor (private id: string, private title: string, private description: string, private duration_in_minutes: number, private year_of_release: number) {
        this.id = id
        this.title = title
        this.description = description
        this.duration_in_minutes = duration_in_minutes
        this.year_of_release = year_of_release
    }
}