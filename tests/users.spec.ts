import { test, expect } from '@playwright/test';

const token = process.env.GOREST_TOKEN!;
const baseUrl = process.env.BASE_URL!;

test.describe('Testando todos os verbos da API /users', () => {
	let userId: number;

	test('Criação de usuário', async ({ request }) => {
		const response = await request.post(`${baseUrl}/users`, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			data: {
				name: 'Aninha teste',
				gender: 'female',
				email: `aninha_1@teste.com`,
				status: 'active'
			}
		});

		expect(response.status()).toBe(201);
		const user = await response.json();
		userId = user.id;
	});

	test('Busca usuário criado', async ({ request }) => {
		const response = await request.get(`${baseUrl}/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		expect(response.status(), 'Response deve retornar 200').toBe(200);

		const user = await response.json();
		expect(user.id).toBe(userId);

		expect(user).toHaveProperty('name');
		expect(user).toHaveProperty('email');
		expect(user).toHaveProperty('gender');
		expect(user).toHaveProperty('status');

		expect(user.status).toBe('active');
	});

	test('Atualiza dados do usuário', async ({ request }) => {
		const response = await request.put(`${baseUrl}/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			data: {
				name: 'Aninha 2',
				gender: 'female',
				email: `aninha_3@teste.com`,
				status: 'inactive'
			}
		});

		expect(response.status()).toBe(200);
	});

	test('Remove usuário criado', async ({ request }) => {
		const response = await request.delete(`${baseUrl}/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		expect(response.status()).toBe(204);

		const userRemoved = await request.get(`${baseUrl}/users/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});
		expect(userRemoved.status()).toBe(404);
	});
});
