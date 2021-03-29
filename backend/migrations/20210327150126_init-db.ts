import Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("client", (table) => {
        table.increments();
        table.timestamps(false, true);
        table.string('email').unique();
        table.string('hashed_password');
        table.string('clinic_name');
        table.integer('phone_number');
        table.string('address');
    });
    await knex.schema.createTable('consultation_record', (table) => {
        table.increments();
        table.timestamps(false, true);
        table.integer("client_id").unsigned();
        table.foreign("client_id").references('client.id')
        table.string('clinic')
        table.string('doctor_name')
        table.string('patient_name')
        table.string('diagnosis')
        table.string('medication')
        table.string('consultation_fee')
        table.string('follow_up_consultation')
        table.dateTime('consultation_date_and_time');

    });

}

export async function down(knex: Knex) {
    await knex.schema.dropTableIfExists('consultation_record')
    await knex.schema.dropTableIfExists('client')
}
